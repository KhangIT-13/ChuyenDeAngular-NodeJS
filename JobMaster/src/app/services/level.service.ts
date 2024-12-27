import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Level } from '../models/level.model';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private apiUrl = 'http://localhost:3105/levels'; // URL API cho trình độ
  constructor(private http: HttpClient) { }

  // Lấy tất cả trình độ
  getAllLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(this.apiUrl);
  }

  // Lấy trình độ theo ID
  getLevelById(id: number): Observable<Level> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Level>(url);
  }

  // Tạo trình độ mới
  createLevel(level: Partial<Level>): Observable<Level> {
    // Sử dụng Partial<Level> để LevelID có thể là optional
    return this.http.post<Level>(this.apiUrl, level);
  }

  // Cập nhật trình độ
  updateLevel(id: number, level: Partial<Level>): Observable<Level> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Level>(url, level);
  }

  // Xóa trình độ
  deleteLevel(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  
}
