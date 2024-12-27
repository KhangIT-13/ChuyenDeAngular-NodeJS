import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiUrl = 'http://localhost:3105/experiences'; // URL API cho kinh nghiệm làm việc

  constructor(private http: HttpClient) { }

  // Lấy tất cả kinh nghiệm làm việc
  getAllExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl);
  }

  // Lấy kinh nghiệm làm việc theo ID
  getExperienceById(id: number): Observable<Experience> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Experience>(url);
  }

  // Tạo kinh nghiệm làm việc mới
  createExperience(experience: Partial<Experience>): Observable<Experience> {
    // Sử dụng Partial<Experience> để ExperienceID có thể là optional
    return this.http.post<Experience>(this.apiUrl, experience);
  }

  // Cập nhật kinh nghiệm làm việc
  updateExperience(id: number, experience: Partial<Experience>): Observable<Experience> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Experience>(url, experience);
  }

  // Xóa kinh nghiệm làm việc
  deleteExperience(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  
}
