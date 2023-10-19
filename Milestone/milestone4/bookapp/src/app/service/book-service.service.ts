import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from '../models/Book';


@Injectable({ providedIn: 'root' })
export class BookServiceService {
  private host = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  public getBooks(callback: (books: Book[]) => void): void {
    this.http.get<Book[]>(this.host + "/books").subscribe((books: Book[]) => {
        callback(books);
    });
  }

  public createBook(book: Book, callback: () => void): void {
    this.http.post<Book>(this.host + "/books", book).subscribe((data) => {
        callback();
    });
  }

  public updateBook(book: Book, callback: () => void): void {
    this.http.put<Book>(this.host + "/books", book).subscribe((data) => {
        callback();
    });
  }

  public deleteBook(id: number, callback: () => void): void {
    this.http.delete(this.host + "/books/" + id).subscribe((data) => {
        callback();
    });
  }

}
