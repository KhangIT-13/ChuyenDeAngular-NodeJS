import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { PublishService } from '../../services/publish.service';
import { Publish } from '../../models/publish.model';
import { JobCategory } from '../../models/job-category.model';
import { JobCategoryService } from '../../services/job-category.service';
import { LevelService } from '../../services/level.service';
import { Level } from '../../models/level.model';
import { ProvinceService } from '../../services/province.service';
import { Province } from '../../models/province.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models/application.model';
import { Resume } from '../../models/resume.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ResumeService } from '../../services/resume.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['search.component.css'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  publishs: Publish[] = [];
  jobCategories: JobCategory[] = [];
  levels: Level[] = [];
  provinces: Province[] = [];
  searchCriteria: any = {
    keyword: '',
    province: '',
  };
  application: Application = {
    ApplicationID: 0,
    PublishID: 0,
    UserID: 0,
    StatusID: 0,
    AppliedAt: new Date(),
    ResumeID: 0,
  };
  userInfo: User = {
    UserID: 1,
    UserName: ' ',
    PasswordHash: '',
    Email: '',
    FullName: '',
    Phone: '',
    Sex: 2,
    DateOfBirth: new Date(),
    Marital: 0,
    Country: '',
    Address: '',
    AttachedFile: '',
    Role: 'Candidate',
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
  };
  profile: Resume = {
    ResumeID: 0, // Tùy chọn vì giá trị sẽ được tự động tạo
    UserID: 0, // Bắt buộc
    Title: '', // Tùy chọn
    Summary: '', // Tùy chọn
    Skills: '', // Tùy chọn
    ExperienceID: 0, // Tùy chọn
    EducationID: 0, // Tùy chọn
    CurrentLevelID: 0, // Tùy chọn
    WishLevelID: 0, // Tùy chọn
    WishSalary: 1000000, // Tùy chọn
    WishProvinceID: 0, // Tùy chọn
    CreatedAt: new Date(), // Tự động tạo
    UpdatedAt: new Date(), // Tự động tạo
  };
  nopDon: boolean = false;
  constructor(
    private publish: PublishService,
    private jobCategory: JobCategoryService,
    private levelSv: LevelService,
    private provinceSv: ProvinceService,
    private applicationService: ApplicationService,
    private userService: UserService,
    private resumeService: ResumeService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const userId = this.authService.getUserIdFromToken();
    if (userId) {
      this.loadUserInfoAndProfile(userId);
    } else {
      console.error('Không xác định được UserID');
    }
    this.getPublishes();
    this.getJobCats();
    this.getLevels();
    this.getProvinces();
  }

  private loadUserInfoAndProfile(userId: number): void {
    this.userService.getUserById(userId).subscribe(
      (data) => {
        this.userInfo = data;
        this.loadResume(userId);
      },
      (error) => {
        console.error('Không lấy được thông tin người dùng:', error);
      }
    );
  }

  private loadResume(userId: number): void {
    this.resumeService.getResumeByUserId(userId).subscribe(
      (data) => {
        this.profile = data;
        console.log('Resume profile:', this.profile);
      },
      (error) => {
        console.error('Error getting resume:', error);
      }
    );
  }
  getProvinces() {
    this.provinceSv.getAllProvinces().subscribe(
      (provinces) => {
        this.provinces = provinces;
        console.log(provinces);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getJobCats(): void {
    this.jobCategory.getAllJobCategories().subscribe(
      (jobCats) => {
        this.jobCategories = jobCats;
        console.log(jobCats);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getLevels(): void {
    this.levelSv.getAllLevels().subscribe(
      (levels) => {
        this.levels = levels;
        console.log(levels);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getPublishes(): void {
    this.publish.getAllPublishes().subscribe(
      (publishes) => {
        this.publishs = publishes;
        console.log(publishes);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  collectFilters(): any {
    const filters: any = {};

    // Collect industry filters
    const industryCheckboxes = document.querySelectorAll(
      'input[name="industry"]:checked'
    );
    filters.industries = Array.from(industryCheckboxes).map(
      (checkbox: any) => checkbox.value
    );

    // Collect rating filters
    const ratingCheckboxes = document.querySelectorAll(
      'input[name="rating"]:checked'
    );
    filters.ratings = Array.from(ratingCheckboxes).map(
      (checkbox: any) => checkbox.value
    );

    // Collect level filters
    const levelCheckboxes = document.querySelectorAll(
      'input[name="level"]:checked'
    );
    filters.levels = Array.from(levelCheckboxes).map(
      (checkbox: any) => checkbox.value
    );

    // Collect salary filters
    const minSalary = (
      document.getElementById('min-salary') as HTMLInputElement
    ).value;
    const maxSalary = (
      document.getElementById('max-salary') as HTMLInputElement
    ).value;
    filters.salary = { min: minSalary, max: maxSalary };

    return filters;
  }

  onSearchJob(): void {
    const { keyword, province } = this.searchCriteria;
    console.log('Tìm kiếm với:', { keyword, province });
  }
  ngAfterViewInit() {
    // logic that depends on view being fully initialized
  }

  ungTuyen(publishId: number): void {
    console.log('Ứng tuyển:', publishId);
    this.application.PublishID = publishId;
    this.application.UserID = this.userInfo.UserID;
    this.application.ResumeID = this.profile.ResumeID;
    this.application.StatusID = 1;
    this.application.AppliedAt = new Date();
    console.log('Ứng tuyển:', this.application);
    this.applicationService.createApplication(this.application).subscribe(
      (data) => {
        console.log('Ứng tuyển thành công:', data);
        this.nopDon = true;
      },
      (error) => {
        console.error('Ứng tuyển thất bại:', error);
      }
    );
  }
}
