import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3105/users'; // URL API cho user
  constructor(private http: HttpClient) { }

  // Đăng nhập 
  login(email: string, password: string): Observable<User> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<User>(url, { email, password });
  }

  // Đăng ký
  register(user: Partial<User>): Observable<User> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<User>(url, user);
  }

  // Lấy tất cả user
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Lấy user theo ID
  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  // Tạo user mới
  createUser(user: Partial<User>): Observable<User> {
    // Sử dụng Partial<User> để UserID có thể là optional
    return this.http.post<User>(this.apiUrl, user);
  }

  // Cập nhật user
  updateUser(id: number, user: Partial<User>): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<User>(url, user);
  }


  // Xóa user
  deleteUser(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Lấy user theo email
  getUserByEmail(email: string): Observable<User> {
    const url = `${this.apiUrl}/email/${email}`;
    return this.http.get<User>(url);
  }


}
