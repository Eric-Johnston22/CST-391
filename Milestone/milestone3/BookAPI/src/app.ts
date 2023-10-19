// Imports express from the node_modules folder located at root of project
import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import booksRouter from "./books/books.routes";
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

// Set the app as the express() method
const app = express();
// Set the port number
const port = 5000;


// Sends the res.send() string to the web page
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World from TypeScript!');
});

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// enable all CORS request
app.use(cors());
// adding set pf security middleware
app.use(helmet());

// Logs to the console the following string when the app starts running
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

console.log(process.env.GREETING);

if (process.env.NODE_ENV == 'development'){
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
};

// Application routes
// root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Music API</h1>')
});


app.use('/', [booksRouter]);