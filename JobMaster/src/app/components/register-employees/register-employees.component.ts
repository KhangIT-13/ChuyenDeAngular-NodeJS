import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-employees',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-employees.component.html',
  styleUrl: './register-employees.component.css'
})
export class RegisterEmployeesComponent {
  user = {
    UserName: '',
    Password: '',
    Email: '',
    FullName: '',
    Phone: '',
    Role: 'Candidate', // Mặc định là Ứng viên
  };
  comfirmPassword: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  register() {
    this.user.UserName = this.user.Email;
    if (!this.user.UserName || !this.user.Password || !this.user.Email) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    if (this.user.Password.length < 6) {
      alert('Mật khẩu phải chứa ít nhất 6 ký tự!');
      return;
    }
    if (this.user.Password !== this.comfirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }

    this.authService.register(this.user).subscribe({
      next: (res) => {
        alert('Đăng ký thành công!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        if (err.error === 'ExistingUser') {
          alert('Tài khoản đã tồn tại!');
          return;
        }
        alert('Đăng ký thất bại! Vui lòng thử lại sau!');
      },
    });
  }
}
