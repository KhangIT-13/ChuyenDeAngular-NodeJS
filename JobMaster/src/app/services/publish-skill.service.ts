import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublishSkill } from '../models/publish-skill.model';

@Injectable({
  providedIn: 'root'
})
export class PublishSkillService {
  private apiUrl = 'http://localhost:3105/publish-skills'; // URL API cho kỹ năng công bố
  constructor(private http: HttpClient) { }

  // Lấy tất cả kỹ năng công bố
  getAllPublishSkills(): Observable<PublishSkill[]> {
    return this.http.get<PublishSkill[]>(this.apiUrl);
  }

  // Lấy kỹ năng công bố theo ID
  getPublishSkillById(id: number): Observable<PublishSkill> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<PublishSkill>(url);
  }

  // Tạo kỹ năng công bố mới
  createPublishSkill(publishSkill: Partial<PublishSkill>): Observable<PublishSkill> {
    // Sử dụng Partial<PublishSkill> để PublishSkillID có thể là optional
    return this.http.post<PublishSkill>(this.apiUrl, publishSkill);
  }

  // Cập nhật kỹ năng công bố
  updatePublishSkill(id: number, publishSkill: Partial<PublishSkill>): Observable<PublishSkill> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<PublishSkill>(url, publishSkill);
  }

  // Xóa kỹ năng công bố
  deletePublishSkill(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  
}
