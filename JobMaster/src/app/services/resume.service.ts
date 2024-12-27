import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resume } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:3105/resumes'; // URL API cho hồ sơ
  constructor(private http: HttpClient) { }

  // Lấy tất cả hồ sơ
  getAllResumes(): Observable<Resume[]> {
    return this.http.get<Resume[]>(this.apiUrl);
  }

  // Lấy hồ sơ theo ID
  getResumeById(id: number): Observable<Resume> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Resume>(url);
  }

  // Tạo hồ sơ mới
  createResume(resume: Partial<Resume>): Observable<Resume> {
    // Sử dụng Partial<Resume> để ResumeID có thể là optional
    return this.http.post<Resume>(this.apiUrl, resume);
  }

  // Cập nhật hồ sơ
  updateResume(id: number, resume: Partial<Resume>): Observable<Resume> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Resume>(url, resume);
  }

  // Xóa hồ sơ
  deleteResume(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Lấy hồ sơ theo ID của user
  getResumeByUserId(id: number): Observable<Resume> {
    const url = `${this.apiUrl}/user/${id}`;
    return this.http.get<Resume>(url);
  }


}
