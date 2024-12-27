import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, NavigationEnd, Data } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isHomePage: boolean = false; // Biến để kiểm tra nếu đang ở trang home
  isLogin: boolean = false; // Biến để kiểm tra nếu đã đăng nhập
  userName: string = '';
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLogin = this.authService.isLoggedIn(); // Kiểm tra nếu đã đăng nhập


    // Theo dõi sự thay đổi của route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Kiểm tra nếu route hiện tại là '/home'
        const currentUrl = this.router.url;
        this.isHomePage =
          currentUrl === '' || currentUrl === '/' ? false : true;
        console.log(this.isHomePage);
      }
    });

    setTimeout(() => {
      const userId = this.authService.getUserIdFromToken();
      if (userId) {
        this.userService.getUserById(userId).subscribe(
          (data) => {
            this.userName = data.FullName ?? 'Không xác định'; // Lấy Fullname từ API
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
  logout():void{
    this.authService.logout();
    console.log("logout");
    
  }
}
