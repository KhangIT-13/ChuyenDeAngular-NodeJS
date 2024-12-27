import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = 'http://localhost:3105/applications'; // URL API cho ứng tuyển
  constructor(private http: HttpClient) { }

  // Lấy tất cả ứng tuyển
  getAllApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }

  // Lấy ứng tuyển theo ID
  getApplicationById(id: number): Observable<Application> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Application>(url);
  }

  // Lấy ứng tuyển theo ID người dùng
  getApplicationsByUserId(userId: number): Observable<Application[]> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<Application[]>(url);
  }

  // Tạo ứng tuyển mới
  createApplication(application: Partial<Application>): Observable<Application> {
    // Sử dụng Partial<Application> để ApplicationID có thể là optional
    return this.http.post<Application>(this.apiUrl, application);
  }

  // Cập nhật ứng tuyển
  updateApplication(id: number, application: Partial<Application>): Observable<Application> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Application>(url, application);
  }

  // Xóa ứng tuyển
  deleteApplication(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Xóa ứng tuyển theo ID Publish và ID người dùng
  deleteApplicationByPublishIdAndUserId(publishId: number, userId: number): Observable<void> {
    const url = `${this.apiUrl}/publish/${publishId}/user/${userId}`;
    return this.http.delete<void>(url);
  }
}
