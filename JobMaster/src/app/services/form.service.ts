import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '../models/form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:3105/forms'; // URL API cho form
  constructor(private http: HttpClient) { }

  // Lấy tất cả form
  getAllForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.apiUrl);
  }

  // Lấy form theo ID
  getFormById(id: number): Observable<Form> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Form>(url);
  }

  // Tạo form mới
  createForm(form: Partial<Form>): Observable<Form> {
    // Sử dụng Partial<Form> để FormID có thể là optional
    return this.http.post<Form>(this.apiUrl, form);
  }

  // Cập nhật form
  updateForm(id: number, form: Partial<Form>): Observable<Form> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Form>(url, form);
  }

  // Xóa form
  deleteForm(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  
}
