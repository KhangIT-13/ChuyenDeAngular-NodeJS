import { Component, NgModule, OnInit } from '@angular/core';
import { PublishService } from '../../services/publish.service';
import { CompanyService } from '../../services/company.service';
import { LevelService } from '../../services/level.service';
import { Experience } from '../../models/experience.model';
import { ExperienceService } from '../../services/experience.service';
import { ProvinceService } from '../../services/province.service';
import { WelfareService } from '../../services/welfare.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Publish } from '../../models/publish.model';
import { Company } from '../../models/company.model';
import { FormService } from '../../services/form.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EducationLevel } from '../../models/education-level.model';
import { EducationLevelService } from '../../services/education-level.service';
import { JobCategoryService } from '../../services/job-category.service';
import { JobWelfareService } from '../../services/job-welfare.service';
import { Province } from '../../models/province.model';
import { Level } from '../../models/level.model';
import { Welfare } from '../../models/welfare.model';
import { JobCategory } from '../../models/job-category.model';
import { Form } from '../../models/form.model';
import { JobWelfare } from '../../models/job-welfare.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-published-recruitment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './published-recruitment.component.html',
  styleUrl: './published-recruitment.component.css',
})
export class PublishedRecruitmentComponent implements OnInit {
  company: Company = {
    CompanyID: 0,
    CompanyName: '',
    Description: '',
    Website: '',
    Location: '',
    Country: '',
    IndustryID: 0,
    EmployeeCount: 0,
    Logo: '',
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
  };
  publish: Publish = {
    PublishID: 0,
    PublishTitle: '',
    Quantity: 0,
    Sex: 0,
    Description: '',
    Requirements: '',
    Nature: '',
    LevelID: 0,
    EducationLevelID: 0,
    ExperienceID: 0,
    Salary: '',
    FormID: 0,
    TryTime: '',
    IndustryID: 0,
    WorkPlace: '',
    CompanyID: 0,
    UserID: 0,
    SubmissionDeadline: new Date(),
  };

  provinces: Province[] = [];
  levels: Level[] = [];
  experiences: Experience[] = [];
  welfares: Welfare[] = [];
  forms: Form[] = [];
  educationLevels: EducationLevel[] = [];
  userID: number = 0;
  jobCat: JobCategory[] = [];
  selectedWelfares: number[] = []; // Mảng lưu tên các phúc lợi được chọn
  jobWel: JobWelfare = {
    JobWelfareID: 0,
    PublishID: 0,
    WelfareID: 0,
  };

  constructor(
    private publishService: PublishService,
    private companyService: CompanyService,
    private levelService: LevelService,
    private experienceService: ExperienceService,
    private provinceService: ProvinceService,
    private welfareService: WelfareService,
    private jobwelfareService: JobWelfareService,
    private educationLevelService: EducationLevelService,
    private authService: AuthService,
    private userService: UserService,
    private formService: FormService,
    private jobCategoryService: JobCategoryService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const userId = this.authService.getUserIdFromToken();
    if (userId) {
      this.loadUserInfoAndProfile(userId);
    } else {
      console.error('Không xác định được UserID');
    }
    const publishId = this.route.snapshot.paramMap.get('id');
    if (publishId) {
      this.publishService.getPublishById(Number(publishId)).subscribe(
        (data) => {
          this.publish = data;
          this.loadStaticData();

          console.log('Publish:', this.publish);
        },
        (error) => {
          console.error('Không lấy được thông tin Publish:', error);
        }
      );
    } else {
      this.loadStaticData();
    }
  }

  private loadUserInfoAndProfile(userId: number): void {
    this.userService.getUserById(userId).subscribe(
      (data) => {
        if (data.UserID) this.userID = data.UserID;
        // Sau khi lấy thông tin người dùng, tải hồ sơ
        console.log('User info:', this.userID);
      },
      (error) => {
        console.error('Không lấy được thông tin người dùng:', error);
      }
    );
  }

  private loadStaticData(): void {
    this.provinceService.getAllProvinces().subscribe((data) => {
      this.provinces = data;
    });
    this.levelService.getAllLevels().subscribe((data) => {
      this.levels = data;
    });
    this.experienceService.getAllExperiences().subscribe((data) => {
      this.experiences = data;
    });
    this.welfareService.getAllWelfares().subscribe((data) => {
      this.welfares = data;
    });
    this.formService.getAllForms().subscribe((data) => {
      this.forms = data;
    });

    this.educationLevelService.getAllEducationLevels().subscribe((data) => {
      this.educationLevels = data;
    });

    this.jobCategoryService.getAllJobCategories().subscribe((data) => {
      this.jobCat = data;
    });
  }
  onWelfareChange(event: Event, welfareName: number): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      // Thêm vào danh sách nếu được chọn
      this.selectedWelfares.push(welfareName);
    } else {
      // Loại bỏ khỏi danh sách nếu bỏ chọn
      this.selectedWelfares = this.selectedWelfares.filter(
        (name) => name !== welfareName
      );
    }
  }
  saveChange(): void {
    this.companyService.createCompany(this.company).subscribe(
      (data) => {
        console.log(data);
        console.log('Company req:', data.CompanyName);
        this.publish.UserID = this.userID;
        this.publish.CompanyID = data.CompanyID;
        console.log('Publish before:', this.publish);
        this.publishService.createPublish(this.publish).subscribe(
          (data) => {
            console.log(data);
            // Lưu danh sách phúc lợi
            this.selectedWelfares.forEach((id) => {
              this.jobWel.PublishID = data.PublishID;
              this.jobWel.WelfareID = id;
              this.jobwelfareService.createJobWelfare(this.jobWel).subscribe(
                (data) => {
                  console.log('Phúc lợi:', data);
                },
                (error) => {
                  console.error('Không thể thêm phúc lợi:', error);
                }
              );
            });
          },
          (error) => {
            console.error('Không thể tạo bài đăng:', error);
          }
        );
        alert('Đăng tuyển thành công!');
      },
      (error) => {
        console.error('Không thể tạo công ty:', error);
      }
    );
  }
}
