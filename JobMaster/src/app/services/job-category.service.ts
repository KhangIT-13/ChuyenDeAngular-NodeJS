import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobCategory } from '../models/job-category.model';
@Injectable({
  providedIn: 'root'
})
export class JobCategoryService {

  private apiUrl = 'http://localhost:3105/job-categories'; // URL API cho ngành nghề
  constructor(private http: HttpClient) { }

  // Lấy tất cả ngành nghề
  getAllJobCategories(): Observable<JobCategory[]> {
    return this.http.get<JobCategory[]>(this.apiUrl);
  }

  // Lấy ngành nghề theo ID
  getJobCategoryById(id: number): Observable<JobCategory> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<JobCategory>(url);
  }

  // Tạo ngành nghề mới

  createJobCategory(jobCategory: Partial<JobCategory>): Observable<JobCategory> {
    // Sử dụng Partial<JobCategory> để JobCategoryID có thể là optional
    return this.http.post<JobCategory>(this.apiUrl, jobCategory);
  }

  // Cập nhật ngành nghề
  updateJobCategory(id: number, jobCategory: Partial<JobCategory>): Observable<JobCategory> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<JobCategory>(url, jobCategory);
  }

  // Xóa ngành nghề
  deleteJobCategory(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
}
