import { Component } from '@angular/core';
import { BookServiceService } from '../service/book-service.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  Book: Book = new Book(-1, '', '', '', -1);
  wasSubmitted: boolean = false;

  constructor(private service: BookServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.deleteBook(this.Book.bookId, this.test);
    console.log('The return from createBook() was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }
}
