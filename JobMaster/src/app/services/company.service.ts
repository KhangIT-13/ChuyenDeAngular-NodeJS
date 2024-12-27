import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = 'http://localhost:3105/companies'; // URL API cho công ty
  constructor(private http: HttpClient) { }

  // Lấy tất cả công ty
  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  // Lấy công ty theo ID
  getCompanyById(id: number): Observable<Company> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Company>(url);
  }

  // Tạo công ty mới
  createCompany(company: Partial<Company>): Observable<Company> {
    // Sử dụng Partial<Company> để CompanyID có thể là optional
    return this.http.post<Company>(this.apiUrl, company);
  }

  // Cập nhật công ty
  updateCompany(id: number, company: Partial<Company>): Observable<Company> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Company>(url, company);
  }

  // Xóa công ty
  deleteCompany(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }


}
