import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-employees',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-employees.component.html',
  styleUrl: './login-employees.component.css'
})
export class LoginEmployeesComponent implements OnInit {
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
      this.router.navigate(['/']); // Chuyển hướng đến trang chủ nếu  đãđăng nhập
    }
  }

  login() {
    if (!this.user.UserName || !this.user.Password) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    this.authService.login(this.user).subscribe({
      next: (res) => {
        alert('Đăng nhập thành công!');
        localStorage.setItem('token', res.token); // Lưu token vào localStorage
        if(res.user.Role === 'Admin') {
          this.router.navigate(['/admin-index']); // Điều hướng đến trang admin
        } else {
          this.router.navigate(['/']); // Điều hướng đến dashboard
        }
          
      },
      error: (err) => {
        console.error(err);
        alert('Đăng nhập thất bại! Kiểm tra thông tin và thử lại.');
      },
    });
  }
}
