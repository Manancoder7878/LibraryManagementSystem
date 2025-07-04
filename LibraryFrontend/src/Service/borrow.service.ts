import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

   private apiUrl = 'https://localhost:7118/Borrow';
  constructor(private http: HttpClient) {}

  borrowBook(userId: number, bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/borrow?userId=${userId}&bookId=${bookId}`, {});
  }

  returnBook(borrowId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/return?borrowId=${borrowId}`, {});
  }
}
