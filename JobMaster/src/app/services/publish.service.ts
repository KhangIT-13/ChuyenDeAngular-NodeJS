import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publish } from '../models/publish.model';

@Injectable({
  providedIn: 'root'
})
export class PublishService {
  private apiUrl = 'http://localhost:3105/publishes'; // URL API cho công ty
  constructor(private http: HttpClient) { }

  // Lấy tất cả công ty
  getAllPublishes(): Observable<Publish[]> {
    return this.http.get<Publish[]>(this.apiUrl);
  }

  // Lấy công ty theo ID
  getPublishById(id: number): Observable<Publish> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Publish>(url);
  }

  // Lấy Publish theo UserID
  getPublishByUserId(userId: number): Observable<Publish[]> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<Publish[]>(url);
  }

  // Tạo công ty mới
  createPublish(publish: Partial<Publish>): Observable<Publish> {
    // Sử dụng Partial<Company> để CompanyID có thể là optional
    return this.http.post<Publish>(this.apiUrl, publish);
  }

  // Cập nhật công ty
  updatePublish(id: number, publish: Partial<Publish>): Observable<Publish> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Publish>(url, publish);
  }


  // Xóa công ty
  deletePublish(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  
}
