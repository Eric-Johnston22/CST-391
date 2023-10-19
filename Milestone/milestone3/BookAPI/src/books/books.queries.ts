export const BookQueries = 
{
    readBooks: 
    `SELECT
        id AS bookId, title AS title, author AS author,
        genre AS genre, published AS published
    FROM bookkeeper.books
    `,
    readBooksByAuthor:
    `SELECT
        id AS bookId, title AS title, author AS author,
        genre AS genre, published AS published
    FROM bookkeeper.books
    WHERE bookkeeper.books.author = ?
    `,
    readBooksByAuthorSearch:
    `SELECT
        id AS bookId, title AS title, author AS author,
        genre AS genre, published AS published
    FROM bookkeeper.books
    WHERE bookkeeper.books.author LIKE ?
    `,
    readBooksByGenreSearch:
    `SELECT
        id AS bookId, title AS title, author AS author,
        genre AS genre, published AS published
    FROM bookkeeper.books
    WHERE bookkeeper.books.genre LIKE ?
    `,
    readBooksByBookId:
    `SELECT
        id AS bookId, title AS title, author AS author,
        genre AS genre, published AS published
    FROM bookkeeper.books
    WHERE bookkeeper.books.id LIKE ?
    `,
    createBook:
    `
    INSERT INTO BOOKS(title, author, genre, published) VALUES(?,?,?,?)
    `,
    updateBook:
    `
    UPDATE bookkeeper.books
    SET title = ?, author = ?, genre = ?, published = ?
    WHERE id = ?
    `,
    deleteBook:
    `
    DELETE FROM bookkeeper.books
    WHERE id = ?
    `
};