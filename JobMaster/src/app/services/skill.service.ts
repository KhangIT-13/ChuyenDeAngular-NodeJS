import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = 'http://localhost:3105/skills'; // URL API cho kỹ năng
  constructor(private http: HttpClient) { }

  // Lấy tất cả kỹ năng
  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  }

  // Lấy kỹ năng theo ID
  getSkillById(id: number): Observable<Skill> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Skill>(url);
  }

  // Tạo kỹ năng mới
  createSkill(skill: Partial<Skill>): Observable<Skill> {
    // Sử dụng Partial<Skill> để SkillID có thể là optional
    return this.http.post<Skill>(this.apiUrl, skill);
  }

  // Cập nhật kỹ năng
  updateSkill(id: number, skill: Partial<Skill>): Observable<Skill> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Skill>(url, skill);
  }

  // Xóa kỹ năng
  deleteSkill(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
}
