import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Publish } from '../../models/publish.model';
import { PublishService } from '../../services/publish.service';
import { DatePipe } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { LevelService } from '../../services/level.service';
import { ExperienceService } from '../../services/experience.service';
import { ProvinceService } from '../../services/province.service';
import { WelfareService } from '../../services/welfare.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobWelfareService } from '../../services/job-welfare.service';
import { JobWelfare } from '../../models/job-welfare.model';
import { Welfare } from '../../models/welfare.model';
import { Industry } from '../../models/industry.model';
import { Experience } from '../../models/experience.model';
import { User } from '../../models/user.model';
import { Resume } from '../../models/resume.model';
import { UserService } from '../../services/user.service';
import { ResumeService } from '../../services/resume.service';
import { Application } from '../../models/application.model';
import { ApplicationService } from '../../services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [DatePipe, FormsModule, CommonModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css',
})
export class JobDetailComponent {
  job: any = {};
  company: any = {};
  jobId: number = 0;
  level: string = '';
  location: string = '';
  welfares: any = {};
  industry: string = '';
  experience: string = '';
  welfaresName: any[] = [];
  jw: any = {};

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
  application: Application = {
    ApplicationID: 0,
    PublishID: 0,
    UserID: 0,
    StatusID: 0,
    AppliedAt: new Date(),
    ResumeID: 0,
  };
  nopDon: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private publishService: PublishService,
    private companyService: CompanyService,
    private levelService: LevelService,
    private experienceService: ExperienceService,
    private provinceService: ProvinceService,
    private welfareService: WelfareService,
    private jobwelfareService: JobWelfareService,
    private userService: UserService,
    private resumeService: ResumeService,
    private applicationService: ApplicationService,
    private router: Router

  ) {
    this.jobId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    const userId = this.authService.getUserIdFromToken();
    if (userId) {
      this.loadUserInfoAndProfile(userId);
    } else {
      console.error('Không xác định được UserID');
    }
    this.publishService
      .getPublishById(this.jobId)
      .subscribe((publish: Publish) => {
        this.job = publish;

        console.log(this.job);

        this.levelService.getLevelById(this.job.LevelId).subscribe((level) => {
          if (level) this.level = level.LevelName;
        });

        this.experienceService
          .getExperienceById(this.job.ExperienceID)
          .subscribe((experience) => {
            if (experience) this.experience = experience.ExperienceName;
          });

        this.provinceService
          .getProvinceById(this.job.ProvinceId)
          .subscribe((province) => {
            if (province) this.location = province.ProvinceName;
          });

        this.provinceService.getProvinceById(this.job.IndustryID).subscribe((province) => {
          if (province) this.location = province.ProvinceName;
        });


        this.companyService
          .getCompanyById(this.job.CompanyId)
          .subscribe((company) => {
            if (company) this.company = company;
          });

        this.jobwelfareService
          .getJobWelfareByPublishId(this.jobId)
          .subscribe((jw) => {
            if (jw) {
              this.jw = jw;
              console.log('JW', this.jw);

              // Lặp qua từng đối tượng trong mảng jw và lấy WelfareId
              this.jw.forEach((jobWelfare: any) => {
                this.welfareService
                  .getWelfareById(jobWelfare.WelfareID)
                  .subscribe((welfare) => {
                    if (welfare) {
                      this.welfaresName.push(welfare.WelfareName);
                    }
                  });
              });
            }
          });
          
      });
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

  ungTuyen(publishId: number): void {
    if(!this.authService.isLoggedIn()) {
      alert('Bạn cần đăng nhập để ứng tuyển');
      this.router.navigate(['/login']);
      return;
    }
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
