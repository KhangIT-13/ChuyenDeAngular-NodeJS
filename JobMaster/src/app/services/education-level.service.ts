import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationLevel } from '../models/education-level.model';

@Injectable({
  providedIn: 'root'
})
export class EducationLevelService {

  private apiUrl = 'http://localhost:3105/education-levels'; // URL API cho trình độ học vấn
  constructor(private http: HttpClient) { }

  // Lấy tất cả trình độ học vấn
  getAllEducationLevels(): Observable<EducationLevel[]> {
    return this.http.get<EducationLevel[]>(this.apiUrl);
  }

  // Lấy trình độ học vấn theo ID
  getEducationLevelById(id: number): Observable<EducationLevel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<EducationLevel>(url);
  }

  // Tạo trình độ học vấn mới
  createEducationLevel(educationLevel: Partial<EducationLevel>): Observable<EducationLevel> {
    // Sử dụng Partial<EducationLevel> để EducationLevelID có thể là optional
    return this.http.post<EducationLevel>(this.apiUrl, educationLevel);
  }

  // Cập nhật trình độ học vấn
  updateEducationLevel(id: number, educationLevel: Partial<EducationLevel>): Observable<EducationLevel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<EducationLevel>(url, educationLevel);
  }

  // Xóa trình độ học vấn
  deleteEducationLevel(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
}
