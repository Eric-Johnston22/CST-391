import { Component, Input } from '@angular/core';
import { BookServiceService } from '../service/book-service.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  wasSubmitted: boolean = false
  constructor(private service: BookServiceService) { }
  @Input() book: Book | null = null;
  sold: boolean = false;
  ngOnInit() { }

  public onSubmit() {
    this.service.updateBook(this.book!, this.test);
    console.log('The return from updateBook() was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }
}
