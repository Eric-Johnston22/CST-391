import { Component, NgModule, OnInit } from '@angular/core';
import { BookServiceService } from '../service/book-service.service';
import { Book } from '../models/Book';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  wasSubmitted: boolean = false;
  Book: Book = new Book(Math.floor(Math.random() * 1000000), '', '', '', -1);
  constructor(private service: BookServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.createBook(this.Book, this.test);
    console.log('The return from createBook() was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }


}

