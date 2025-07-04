import { Routes } from '@angular/router';
import { BookAdminComponent } from '../book-admin/book-admin.component';
import { BorrowComponent } from '../borrow/borrow.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { BookListsComponent } from '../book-lists/book-lists.component';

export const routes: Routes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'books', component: BookListsComponent },
  { path: 'admin/books', component: BookAdminComponent },
  { path: 'borrow', component: BorrowComponent },
  { path: '**', redirectTo: 'books' }
];
