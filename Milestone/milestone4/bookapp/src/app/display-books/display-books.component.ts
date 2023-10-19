import { Component, Input } from '@angular/core';
import { Book } from '../models/Book';
import { BookServiceService } from '../service/book-service.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent {

  @Input() book: Book | null = null;
  sold: boolean = false;
  editBook: Book | null = null;

  constructor(private service: BookServiceService) { }

  ngOnInit() {
    console.log("Getting data ....");
    console.log("Book", this.book);
  }

  public onEditBook(book: Book) {
    this.editBook = book;
  }
}
