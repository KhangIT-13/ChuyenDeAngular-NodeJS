import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Welfare } from '../models/welfare.model';

@Injectable({
  providedIn: 'root'
})
export class WelfareService {
  private apiUrl = 'http://localhost:3105/welfares'; // URL
  constructor(private http: HttpClient) { }

  // Lấy tất cả phúc lợi
  getAllWelfares(): Observable<Welfare[]> {
    return this.http.get<Welfare[]>(this.apiUrl);
  }

  // Lấy phúc lợi theo ID
  getWelfareById(id: number): Observable<Welfare> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Welfare>(url);
  }

  // Tạo phúc lợi mới
  createWelfare(welfare: Partial<Welfare>): Observable<Welfare> {
    return this.http.post<Welfare>(this.apiUrl, welfare);
  }

  // Cập nhật phúc lợi
  updateWelfare(id: number, welfare: Partial<Welfare>): Observable<Welfare> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Welfare>(url, welfare);
  } 

  // Xóa phúc lợi
  deleteWelfare(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  
}
