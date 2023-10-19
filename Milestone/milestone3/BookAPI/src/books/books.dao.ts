import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Book } from "./books.model";
import { BookQueries } from "./books.queries";

export const readBooks = async () => {
    return execute<Book[]>(BookQueries.readBooks, []);
};

export const readBooksByAuthor = async (authorName: string) => {
    return execute<Book[]>(BookQueries.readBooksByAuthor, [authorName]);
};

export const readBooksByAuthorSearch = async (search: string) => {
    console.log("search param ", search);
    return execute<Book[]>(BookQueries.readBooksByAuthorSearch, [search]);
};

export const readBooksByGenreSearch = async (search: string) => {
    console.log("search param ", search);
    return execute<Book[]>(BookQueries.readBooksByGenreSearch, [search]);
};

export const readBooksByBookId = async (BookId: number) => {
    return execute<Book[]>(BookQueries.readBooksByBookId, [BookId]);
};

export const createBook = async (Book: Book) => {
    return execute<OkPacket>(BookQueries.createBook,
        [Book.title, Book.author, Book.genre, Book.published]);
};

export const updateBook = async (Book: Book) => {
    return execute<OkPacket>(BookQueries.updateBook,
        [Book.title, Book.author, Book.genre, Book.published, Book.bookId]);
};

export const deleteBook = async (BookId: number) => {
    return execute<OkPacket>(BookQueries.deleteBook, [BookId]);
};