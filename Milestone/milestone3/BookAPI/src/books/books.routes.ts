import { Router } from "express";
import * as BooksController from './books.controller';

const router = Router();
router
    .route('/books')
    .get(BooksController.readBooks);

router
    .route('/books/:author')
    .get(BooksController.readBooksByAuthor);

router
    .route('/books/search/author/:search')
    .get(BooksController.readBooksByAuthorSearch);

router
    .route('/books/search/genre/:search')
    .get(BooksController.readBooksByGenreSearch);

router
    .route('/books')
    .post(BooksController.createBook);

router
    .route('/books')
    .put(BooksController.updateBook);

router
    .route('/books/:bookId')
    .delete(BooksController.deleteBook);

export default router;