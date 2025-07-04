import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://localhost:7118/Book';
  constructor(private http: HttpClient) {}

  search(query: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/search?query=${query}`);
  }

  addBook(book: Book): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }
}
