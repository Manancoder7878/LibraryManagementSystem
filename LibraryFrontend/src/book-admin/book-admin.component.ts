import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../Model/Book';
import { BookService } from '../Service/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-admin',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-admin.component.html',
  styleUrl: './book-admin.component.css'
})
export class BookAdminComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required)
    });
  }

  addBook() {
    if (this.bookForm.invalid) return;
    const book: Book = { ...this.bookForm.value, isAvailable: true };
    this.bookService.addBook(book).subscribe({ next: () => alert('Book added'), error: err => alert(err.error) });
  }
  get titleControl() { return this.bookForm.get('title'); }
  get authorControl() { return this.bookForm.get('author'); }
  get genreControl() { return this.bookForm.get('genre'); }
}
