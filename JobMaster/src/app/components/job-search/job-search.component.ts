import { ChangeDetectorRef, Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceService } from '../../services/province.service';
import { JobCategoryService } from '../../services/job-category.service';
import { ExperienceService } from '../../services/experience.service';
import { LevelService } from '../../services/level.service';
import { EducationLevelService } from '../../services/education-level.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Resume } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';
import { Province } from '../../models/province.model';
import { JobCategory } from '../../models/job-category.model';
import { Experience } from '../../models/experience.model';
import { Level } from '../../models/level.model';
import { EducationLevel } from '../../models/education-level.model';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.css',
})
export class JobSearchComponent implements OnInit {
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1); // Mảng từ 1 đến 31 cho ngày
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1); // Mảng từ 1 đến 12 cho tháng
  years: number[] = Array.from({ length: 66 }, (_, i) => 2020 - i); // Mảng từ 2020 đến 1955 cho năm
  provinces: Province[] = [];
  jobCategories: JobCategory[] = [];
  experiences: Experience[] = [];
  currentLevels: Level[] = [];
  wishLevels: Level[] = [];
  educationLevels: EducationLevel[] = [];
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
  
  roleUser = 'Candidate';
  constructor(
    private provinceService: ProvinceService,
    private jobCatService: JobCategoryService,
    private experienceService: ExperienceService,
    private levelService: LevelService,
    private educationLevelService: EducationLevelService,
    private authService: AuthService,
    private userService: UserService,
    private resumeService: ResumeService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserIdFromToken();
    if (userId) {
      this.loadUserInfoAndProfile(userId);
    } else {
      console.error('Không xác định được UserID');
    }

    this.loadStaticData();
  }

  private loadUserInfoAndProfile(userId: number): void {
    this.userService.getUserById(userId).subscribe(
      (data) => {
        this.userInfo = data;
        this.roleUser = this.userInfo.Role;
        // Sau khi lấy thông tin người dùng, tải hồ sơ
        console.log('User info:', this.userInfo);
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

  private loadStaticData(): void {
    this.provinceService.getAllProvinces().subscribe((data) => {
      this.provinces = data;
    });
    this.jobCatService.getAllJobCategories().subscribe((data) => {
      this.jobCategories = data;
    });
    this.experienceService.getAllExperiences().subscribe((data) => {
      this.experiences = data;
    });
    this.levelService.getAllLevels().subscribe((data) => {
      this.wishLevels = data;
      this.currentLevels = data;
    });
    this.educationLevelService.getAllEducationLevels().subscribe((data) => {
      this.educationLevels = data;
    });
  }

  onSubmit(): void {
    if (!this.userInfo) {
      alert('Không tìm thấy thông tin người dùng.');
      return;
    }

    if (this.userInfo.UserID) {
      this.userService
        .updateUser(this.userInfo.UserID, this.userInfo)
        .subscribe(
          (updatedUser) => {
            console.log('User updated successfully:', updatedUser);
            alert('Thông tin người dùng đã được cập nhật!');
          },
          (error) => {
            console.error('Error updating user:', error);
            alert('Có lỗi xảy ra khi cập nhật thông tin. Vui lòng thử lại.');
          }
        );
    }
  }

  onSubmitResume(): void {
    console.log('Profile:', this.profile.Title, this.profile.UserID);
    if (!this.profile.UserID) {
      console.error('Invalid profile:', this.profile);
      return;
    }

    if (this.profile.ResumeID) {
      this.resumeService
        .updateResume(this.profile.ResumeID, this.profile)
        .subscribe(
          (updatedResume) => {
            console.log('Resume updated successfully:', updatedResume);
            alert('Hồ sơ đã được cập nhật!');
          },
          (error) => {
            console.error('Error updating resume:', error);
            alert('Có lỗi xảy ra khi cập nhật hồ sơ. Vui lòng thử lại.');
          }
        );
    }
  }
}
