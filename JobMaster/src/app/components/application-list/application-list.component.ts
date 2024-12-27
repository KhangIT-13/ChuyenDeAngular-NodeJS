import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PublishService } from '../../services/publish.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Application } from '../../models/application.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { ApplicationService } from '../../services/application.service';
import { Publish } from '../../models/publish.model';
import { ApplicationView } from '../../models/application-view.model';
import { ApplicationStatus } from '../../models/application-status.model';
import { ApplicationStatusService } from '../../services/application-status.service';
import { app } from '../../../../server';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxPaginationModule],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.css',
})
export class ApplicationListComponent {
  applications: Application[] = []; // Dữ liệu danh sách Application
  page: number = 1; // Trang hiện tại
  itemsPerPage: number = 5; // Số lượng bản ghi mỗi trang
  isLogin: boolean = false; // Biến để kiểm tra nếu đã đăng nhập
  user: User = {
    UserID: 0,
    UserName: '',
    PasswordHash: '',
    Email: '',
    FullName: '',
    Phone: '',
    Sex: 0,
    DateOfBirth: new Date(),
    Marital: 0,
    Country: '',
    Address: '',
    AttachedFile: '',
    Role: 'Employer',
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
  };

  applicationViews: ApplicationView[] = [];
  constructor(
    private publishService: PublishService,
    private applicationService: ApplicationService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private applicationStatusService: ApplicationStatusService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.isLogin = this.authService.isLoggedIn(); // Kiểm tra nếu đã đăng nhập

    setTimeout(() => {
      const userId = this.authService.getUserIdFromToken();
      if (userId) {
        this.userService.getUserById(userId).subscribe(
          (data) => {
            this.user = data;
            this.loadApplication(); // Lấy danh sách Publish khi Component khởi tạo
          },
          (error) => {
            console.error('Không lấy được thông tin người dùng:', error);
          }
        );
      } else {
        console.error('Không xác định được UserID');
      }
      this.cdr.detectChanges(); // Thông báo Angular cập nhật
    }, 1000);
  }
  // Lấy danh sách Publish
  loadApplication(): void {
    if (this.user.Role === 'Candidate') {
      this.applicationService.getApplicationsByUserId(this.user.UserID).subscribe(
        (data) => {
          this.applications = data;
          this.applicationViews = [];
          this.applications.forEach((application) => {
            this.publishService.getPublishById(application.PublishID).subscribe(
              (publish) => {
                this.applicationStatusService.getApplicationStatusById(application
                  .StatusID).subscribe(
                    (applicationStatus) => {
                      this.applicationViews.push({
                        application: application,
                        publish: publish,
                        applicationStatus: applicationStatus,
                      });
                    },
                    (error) => {
                      console.error('Không lấy được trạng thái ứng tuyển:', error);
                    }
                  );
              }
            );
          }
          );
        }
      );
    } else if (this.user.Role === 'Employer') {
    } else if (this.user.Role === 'Admin') {
      this.applicationService.getAllApplications().subscribe(
        (data) => {
          this.applications = data;
          this.applicationViews = [];
          this.applications.forEach((application) => {
            this.publishService.getPublishById(application.PublishID).subscribe(
              (publish) => {
                this.applicationStatusService.getApplicationStatusById(application
                  .StatusID).subscribe(
                    (applicationStatus) => {
                      this.applicationViews.push({
                        application: application,
                        publish: publish,
                        applicationStatus: applicationStatus,
                      });
                    },
                    (error) => {
                      console.error('Không lấy được trạng thái ứng tuyển:', error);
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  }

  // Xóa Publish
  deletePublish(id: number): void {
    if (confirm('Bạn có chắc muốn xóa bản ghi này không?')) {
      this.publishService.deletePublish(id).subscribe(() => {
        this.loadApplication(); // Reload danh sách sau khi xóa
        alert('Xóa thành công!');
      });
    }
  }

  huyUngTuyen(idP: number, idU: number): void {
    if (confirm('Bạn có chắc muốn hủy ứng tuyển này không?')) {
      this.applicationService.deleteApplicationByPublishIdAndUserId(idP, idU).subscribe(() => {
        this.loadApplication(); // Reload danh sách sau khi xóa
        alert('Hủy ứng tuyển thành công!');
      });
    }
  }
}
