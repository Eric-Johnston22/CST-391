import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './list-books/list-books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DisplayBooksComponent } from './display-books/display-books.component';

const routes: Routes = [

  { path: 'create', component: CreateBookComponent },

  { path: 'list-cars', component: ListBooksComponent },

  { path: 'display/:id', component: DisplayBooksComponent },

  { path: 'edit', component: EditBookComponent },

  { path: 'delete', component: DeleteBookComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
