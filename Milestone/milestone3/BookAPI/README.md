# Milestone 3
## Book Inventory App
Screencast: https://www.loom.com/share/00c0f6722fd24cb4927c17ef7f5b4b83?sid=332ec39d-0b3d-4d26-9520-4f7c6ce9d7fc

## Design Report
Implemented API, all endpoints working as intended. No known issues or bugs currently

## REST API Endpoints

### Get books
    Get /books/
### Get books by Author
    Get /books/search/author/?
### Get books by Genre
    Get /books/search/genre/?
### Get books by id
    Get /books?bookId=?
### Create book
    Post /books/
#### Body
```json
{
    "title": string,
    "author": string,
    "genre": string,
    "published": int
}
```
### Update book
    Put /books/
#### Body
```json
{
    "bookId": int,
    "title": string,
    "author": string,
    "genre": string,
    "published": int
}
```
### Delete book
    Delete /books/