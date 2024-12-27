import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-employers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-employers.component.html',
  styleUrl: './login-employers.component.css'
})
export class LoginEmployersComponent {
  user = {
    UserName: '',
    Password: '',
  };
  isLogin = false;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      alert('Bạn đã đăng nhập!'); // Thông báo đã đăng nhập
      this.isLogin = true;
      this.router.navigate(['/']); // Chuyển hướng đến trang chủ nếu  đã đăng nhập
    }
  }

  login() {
    if (!this.user.UserName || !this.user.Password) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    this.authService.login(this.user).subscribe({
      next: (res) => {
        console.log(res);
        if (res.user.Role === 'Employer') {
          // Kiểm tra role trả về từ API
          alert('Đăng nhập thành công!');
          localStorage.setItem('token', res.token); // Lưu token vào localStorage
          this.router.navigate(['/']); // Điều hướng đến dashboard
        } else {
          alert('Chỉ nhà tuyển dụng mới được phép đăng nhập!');
        }
      },
      error: (err) => {
        console.error(err);
        alert('Đăng nhập thất bại! Kiểm tra thông tin và thử lại.');
      },
    });
  }
}
