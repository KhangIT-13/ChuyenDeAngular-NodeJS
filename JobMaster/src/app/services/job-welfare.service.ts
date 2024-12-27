import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobWelfare } from '../models/job-welfare.model';

@Injectable({
  providedIn: 'root'
})
export class JobWelfareService {
  private apiUrl = 'http://localhost:3105/job-welfares'; // URL API cho phúc lợi
  constructor(private http: HttpClient) { }

  // Lấy tất cả phúc lợi
  getAllJobWelfares(): Observable<JobWelfare[]> {
    return this.http.get<JobWelfare[]>(this.apiUrl);
  }

  // Lấy phúc lợi theo ID
  getJobWelfareById(id: number): Observable<JobWelfare> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<JobWelfare>(url);
  }

  // Lấy phúc lợi theo công PublishID
  getJobWelfareByPublishId(publishId: number): Observable<JobWelfare> {
    const url = `${this.apiUrl}/publish/${publishId}`;
    return this.http.get<JobWelfare>(url);
  }

  // Tạo phúc lợi mới
  createJobWelfare(jobWelfare: Partial<JobWelfare>): Observable<JobWelfare> {
    // Sử dụng Partial<JobWelfare> để JobWelfareID có thể là optional
    return this.http.post<JobWelfare>(this.apiUrl, jobWelfare);
  }

  // Cập nhật phúc lợi
  updateJobWelfare(id: number, jobWelfare: Partial<JobWelfare>): Observable<JobWelfare> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<JobWelfare>(url, jobWelfare);
  }

  // Xóa phúc lợi
  deleteJobWelfare(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  
}
