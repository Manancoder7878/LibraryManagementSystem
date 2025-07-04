import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { BorrowService } from '../Service/borrow.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-borrow',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './borrow.component.html',
  styleUrl: './borrow.component.css'
})
export class BorrowComponent implements OnInit {
  borrowForm!: FormGroup;
  returnForm!: FormGroup;

  constructor(private borrowService: BorrowService) { }

  ngOnInit(): void {
    this.borrowForm = new FormGroup({
      userId: new FormControl(0, Validators.required),
      bookId: new FormControl(0, Validators.required)
    });

    this.returnForm = new FormGroup({
      borrowId: new FormControl(0, Validators.required)
    });
  }

  borrowBook() {
    if (this.borrowForm.invalid) return;
    const { userId, bookId } = this.borrowForm.value;
    this.borrowService.borrowBook(userId, bookId).subscribe({ next: () => alert('Borrowed'), error: err => alert(err.error) });
  }

  returnBook() {
    if (this.returnForm.invalid) return;
    const { borrowId } = this.returnForm.value;
    this.borrowService.returnBook(borrowId).subscribe({ next: () => alert('Returned'), error: err => alert(err.error) });
  }
  get userIdControl() { return this.borrowForm.get('userId'); }
  get bookIdControl() { return this.borrowForm.get('bookId'); }
  get borrowIdControl() { return this.returnForm.get('borrowId'); }
}

