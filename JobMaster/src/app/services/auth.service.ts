import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3105/users';

  constructor(private http: HttpClient, private router: Router) {}

  // Đăng ký
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // Đăng nhập
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  // Lấy thông tin người dùng từ token
  getProfile(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(`${this.baseUrl}/profile`, { headers });
  }

  // Kiểm tra vai trò
  checkRole(allowedRoles: string[]): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return allowedRoles.includes(payload.Role);
  }

  // Kiểm tra người dùng đã đăng nhập
  isLoggedIn(): boolean {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false; // Không phải môi trường trình duyệt
    }
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    // Kiểm tra token có hợp lệ (nếu cần)
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Giải mã token
      const isExpired = payload.exp * 1000 < Date.now();
      return !isExpired; // Trả về true nếu token còn hiệu lực
    } catch (e) {
      return false;
    }
  }

  // Đăng xuất

  logout(): void {
    localStorage.removeItem('token'); // Xóa token khỏi localStorage
    this.router.navigate(['/login']);
  }

  // Lấy ID User
  getUserIdFromToken(): number | null {
    if (typeof window === 'undefined' || !window.localStorage) {
      console.warn('localStorage is not available in this environment');
      return null; // Không phải môi trường trình duyệt
    }
  
    const token = localStorage.getItem('token');
    if (!token) return null;
  
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Giải mã token
      return payload.UserID || null; // Trả về UserID (nếu có)
    } catch (e) {
      console.error('Invalid token:', e);
      return null;
    }
  }
  
}
