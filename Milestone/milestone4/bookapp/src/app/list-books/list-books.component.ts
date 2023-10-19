import { Component, Input } from '@angular/core';
import { Book } from "../models/Book"
import { BookServiceService } from '../service/book-service.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  @Input() book: Book | null = null;
  books: Book[] = [];
  selectedBook: Book | null = null;
  constructor(private service: BookServiceService) { }

  ngOnInit() {
    console.log("Grabbing data. . .");
    this.service.getBooks((books: Book[]) => {
      this.books = books;
      console.log('this.books', this.books);
    });
  }

  public onSelectBook(book: Book) {
    this.selectedBook = book;
  }

}
