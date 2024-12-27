import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Industry } from '../models/industry.model';
@Injectable({
  providedIn: 'root'
})
export class IndustryService {
  private apiUrl = 'http://localhost:3105/industries'; // URL API cho ngành n
  constructor(private http: HttpClient) { }

  // Lấy tất cả ngành nghề
  getAllIndustries(): Observable<Industry[]> {
    return this.http.get<Industry[]>(this.apiUrl);
  }

  // Lấy ngành nghề theo ID
  getIndustryById(id: number): Observable<Industry> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Industry>(url);
  }

  // Tạo ngành nghề mới
  createIndustry(industry: Partial<Industry>): Observable<Industry> {
    // Sử dụng Partial<Industry> để IndustryID có thể là optional
    return this.http.post<Industry>(this.apiUrl, industry);
  }

  // Cập nhật ngành nghề
  updateIndustry(id: number, industry: Partial<Industry>): Observable<Industry> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Industry>(url, industry);
  }

  // Xóa ngành nghề
  deleteIndustry(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
