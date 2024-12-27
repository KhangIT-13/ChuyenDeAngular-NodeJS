import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PublishService } from '../../services/publish.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Publish } from '../../models/publish.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-publish-list',
  standalone: true,
  imports: [NgxPaginationModule, FormsModule, CommonModule],
  templateUrl: './publish-list.component.html',
  styleUrl: './publish-list.component.css',
})
export class PublishListComponent implements OnInit {
  publishes: Publish[] = []; // Dữ liệu danh sách Publish
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
  constructor(
    private publishService: PublishService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLogin = this.authService.isLoggedIn(); // Kiểm tra nếu đã đăng nhập

    setTimeout(() => {
      const userId = this.authService.getUserIdFromToken();
      if (userId) {
        this.userService.getUserById(userId).subscribe(
          (data) => {
            this.user = data;
            this.loadPublishes(); // Lấy danh sách Publish khi Component khởi tạo
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
  loadPublishes(): void {
    if (this.user.Role === 'Employer') {
      console.log(this.user);
      this.publishService
        .getPublishByUserId(this.user.UserID)
        .subscribe((data: Publish[]) => {
          this.publishes = data; // Lưu dữ liệu vào biến publishes
        });
    } else if (this.user.Role === 'Admin') {
      this.publishService.getAllPublishes().subscribe((data: Publish[]) => {
        this.publishes = data; // Lưu dữ liệu vào biến publishes
      });
    }
  }

  // Xóa Publish
  deletePublish(id: number): void {
    if (confirm('Bạn có chắc muốn xóa bản ghi này không?')) {
      this.publishService.deletePublish(id).subscribe(() => {
        this.loadPublishes(); // Reload danh sách sau khi xóa
        alert('Xóa thành công!');
      });
    }
  }
}
