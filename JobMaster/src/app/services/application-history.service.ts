import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationHistory } from '../models/application-history.model';
@Injectable({
  providedIn: 'root'
})
export class ApplicationHistoryService {
  private apiUrl = 'http://localhost:3105/application-history'; // URL API cho lịch sử ứng tuyển
  constructor(private http: HttpClient) { }

  // Lấy tất cả lịch sử ứng tuyển
  getAllApplicationHistories(): Observable<ApplicationHistory[]> {
    return this.http.get<ApplicationHistory[]>(this.apiUrl);
  }

  // Lấy lịch sử ứng tuyển theo ID
  getApplicationHistoryById(id: number): Observable<ApplicationHistory> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ApplicationHistory>(url);
  }

  // Tạo lịch sử ứng tuyển mới
  createApplicationHistory(applicationHistory: Partial<ApplicationHistory>): Observable<ApplicationHistory> {
    // Sử dụng Partial<ApplicationHistory> để HistoryID và ChangedAt có thể là optional
    return this.http.post<ApplicationHistory>(this.apiUrl, applicationHistory);
  }

  // Cập nhật lịch sử ứng tuyển
  updateApplicationHistory(id: number, applicationHistory: Partial<ApplicationHistory>): Observable<ApplicationHistory> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ApplicationHistory>(url, applicationHistory);
  }

  // Xóa lịch sử ứng tuyển
  deleteApplicationHistory(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Lấy lịch sử ứng tuyển theo ID ứng viên
  getApplicationHistoryByCandidateId(candidateId: number): Observable<ApplicationHistory[]> {
    const url = `${this.apiUrl}/candidate/${candidateId}`;
    return this.http.get<ApplicationHistory[]>(url);
  }


}
