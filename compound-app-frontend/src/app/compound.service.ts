import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CompoundService {
  private apiUrl = 'http://localhost:3000/compounds';

  constructor(private http: HttpClient) {}

  getAllCompounds(page): Observable<any[]> {
    const url = this.apiUrl + "?pg=" + page;
    return this.http.get<any[]>(url);
  }

  getCompoundById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteCompound(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateCompound(body:any,id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`,body,httpOptions);
  }

  addCompound(body:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`,body,httpOptions);
  }
}
