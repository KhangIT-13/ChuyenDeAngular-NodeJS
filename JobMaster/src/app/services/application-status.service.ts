import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationStatus } from '../models/application-status.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStatusService {
  private apiUrl = 'http://localhost:3105/application-status'; // URL API cho trạng thái ứng tuyển
  constructor(private http: HttpClient) { }

  // Lấy tất cả trạng thái ứng tuyển
  getAllApplicationStatuses(): Observable<ApplicationStatus[]> {
    return this.http.get<ApplicationStatus[]>(this.apiUrl);
  }

  // Lấy trạng thái ứng tuyển theo ID
  getApplicationStatusById(id: number): Observable<ApplicationStatus> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ApplicationStatus>(url);
  }

  // Tạo trạng thái ứng tuyển mới
  createApplicationStatus(applicationStatus: Partial<ApplicationStatus>): Observable<ApplicationStatus> {
    // Sử dụng Partial<ApplicationStatus> để StatusID có thể là optional
    return this.http.post<ApplicationStatus>(this.apiUrl, applicationStatus);
  }

  // Cập nhật trạng thái ứng tuyển

  updateApplicationStatus(id: number, applicationStatus: Partial<ApplicationStatus>): Observable<ApplicationStatus> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ApplicationStatus>(url, applicationStatus);
  }

  // Xóa trạng thái ứng tuyển
  deleteApplicationStatus(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  
}
