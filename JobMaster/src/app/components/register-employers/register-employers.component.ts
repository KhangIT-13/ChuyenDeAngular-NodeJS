import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-register-employers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-employers.component.html',
  styleUrl: './register-employers.component.css',
})
export class RegisterEmployersComponent {
  user = {
    UserName: '',
    Password: '',
    Email: '',
    FullName: '',
    Phone: '',
    Role: 'Employer', // Mặc định là Nhà tuyển dụng
  };
  resume = {
    ResumeID: 0, // Tùy chọn vì giá trị sẽ được tự động tạo
    UserID: 0, // Bắt buộc
    Title: '', // Tùy chọn
    Summary: '', // Tùy chọn
    Skills: '', // Tùy chọn
    Experience: '', // Tùy chọn
    Education: '', // Tùy chọn
    CurentLevel: '', // Tùy chọn
    WishLevel: '', // Tùy chọn
    WishSalary: 0, // Tùy chọn
    WishProvince: '', // Tùy chọn
  }
  comfirmPassword: string = '';
  constructor(private authService: AuthService, private router: Router, private resumeService: ResumeService) {}
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
        this.router.navigate(['/login-employer']);
      },
      error: (err) => {
        console.error(err);
        alert('Đăng ký thất bại!');
      },
    });
  }
}
