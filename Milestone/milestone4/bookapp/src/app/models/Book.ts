export class Book {
    bookId: number = -1;
    title: string ="";
    author: string ="";
    genre: string = "";
    published: number = -1;

    constructor(bookId: number, title: string, author: string, genre: string, published: number) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.published = published;
    }
}
