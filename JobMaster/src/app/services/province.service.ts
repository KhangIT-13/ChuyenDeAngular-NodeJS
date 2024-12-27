import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Province } from '../models/province.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private apiUrl = 'http://localhost:3105/provinces'; // URL API cho tỉnh thành
  constructor(private http: HttpClient) { }

  // Lấy tất cả tỉnh thành
  getAllProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>(this.apiUrl);
  }

  // Lấy tỉnh thành theo ID
  getProvinceById(id: number): Observable<Province> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Province>(url);
  }

  // Tạo tỉnh thành mới
  createProvince(province: Partial<Province>): Observable<Province> {
    // Sử dụng Partial<Province> để ProvinceID có thể là optional
    return this.http.post<Province>(this.apiUrl, province);
  }

  // Cập nhật tỉnh thành
  updateProvince(id: number, province: Partial<Province>): Observable<Province> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Province>(url, province);
  }

  // Xóa tỉnh thành
  deleteProvince(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  

}
