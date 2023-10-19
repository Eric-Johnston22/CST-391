import { Request, RequestHandler, Response } from "express";
import { Book } from "./books.model";
import * as BookDao from "./books.dao";
import { OkPacket } from "mysql";

export const readBooks: RequestHandler = async (req: Request, res: Response) => {
    try {
        let books;
        let bookId = parseInt(req.query.bookId as string);

        console.log('bookId', bookId);
        if (Number.isNaN(bookId)) {
            books = await BookDao.readBooks();
        } else {
            books = await BookDao.readBooksByBookId(bookId);
        }

        res.status(200).json(
            books
        );
    } catch (error) {
        console.error("[Books.controller][readBooks][Error] ", error);
        res.status(500).json({
            message: "There was an error when fetching Books"
        });
    }
}

export const readBooksByAuthor: RequestHandler = async (req: Request, res: Response) => {
    try {
        const books = await BookDao.readBooksByAuthor(req.params.artist);

        res.status(200).json(
            books
        );
    } catch (error) {
        console.error('[Books.controller][readBooks][Error] ', error);
        res.status(500).json({
            message: "There was an error when fetching Books"
        });
    }

}

export const readBooksByAuthorSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const books = await BookDao.readBooksByAuthorSearch('%' + req.params.search + '%');

        res.status(200).json(
            books
        );
    } catch (error) {
        console.error('[Books.controller][readBooks][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching Books'
        });
    }
};

export const readBooksByGenreSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const books = await BookDao.readBooksByGenreSearch('%' + req.params.search + '%');

        res.status(200).json(
            books
        );
    } catch (error) {
        console.error('[Books.controller][readBooks][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching Books'
        });
    }
}

export const createBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await BookDao.createBook(req.body);

        console.log('req.body', req.body);
        console.log('Book', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[Books.controller][createBook][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing Books'
        });
    }
};

export const updateBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await BookDao.updateBook(req.body);

        console.log('req.body', req.body);

        console.log('Book', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[Books.controller][updateBook][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating Books'
        });
    }
};

export const deleteBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        let bookId = parseInt(req.params.bookId as string);

        console.log('bookId', bookId);
        if (!Number.isNaN(bookId)) {
            const response = await BookDao.deleteBook(bookId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for BookId");
        }
    } catch(error) {
        console.error('[Books.controller][deleteBook][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting Books'
        });
    }
};