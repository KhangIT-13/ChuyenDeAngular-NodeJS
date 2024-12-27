import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumeSkill } from '../models/resume-skill.model';
@Injectable({
  providedIn: 'root'
})
export class ResumeSkillService {
  private apiUrl = 'http://localhost:3105/resume-skills'; // URL API cho kỹ năng công bố
  constructor(private http: HttpClient) { }

  // Lấy tất cả kỹ năng công bố
  getAllResumeSkills(): Observable<ResumeSkill[]> {
    return this.http.get<ResumeSkill[]>(this.apiUrl);
  }

  // Lấy kỹ năng công bố theo ID
  getResumeSkillById(id: number): Observable<ResumeSkill> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ResumeSkill>(url);
  }

  // Tạo kỹ năng công bố mới
  createResumeSkill(resumeSkill: Partial<ResumeSkill>): Observable<ResumeSkill> {
    // Sử dụng Partial<ResumeSkill> để ResumeSkillID có thể là optional
    return this.http.post<ResumeSkill>(this.apiUrl, resumeSkill);
  }

  // Cập nhật kỹ năng công bố
  updateResumeSkill(id: number, resumeSkill: Partial<ResumeSkill>): Observable<ResumeSkill> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ResumeSkill>(url, resumeSkill);
  }

  // Xóa kỹ năng công bố
  deleteResumeSkill(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Lấy kỹ năng công bố theo ID của hồ sơ
  getResumeSkillByResumeId(resumeId: number): Observable<ResumeSkill[]> {
    const url = `${this.apiUrl}/resume/${resumeId}`;
    return this.http.get<ResumeSkill[]>(url);
  }

  // Lay kỹ năng công bố theo ID của kỹ năng
  getResumeSkillBySkillId(skillId: number): Observable<ResumeSkill[]> {
    const url = `${this.apiUrl}/skill/${skillId}`;
    return this.http.get<ResumeSkill[]>(url);
  }

}
