import { Component } from '@angular/core';
import { BookService } from '../Service/book.service';
import { Book } from '../Model/Book';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-lists',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './book-lists.component.html',
  styleUrl: './book-lists.component.css'
})
export class BookListsComponent {
  query = '';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  search() {
    this.bookService.search(this.query).subscribe(res => this.books = res);
  }
}
