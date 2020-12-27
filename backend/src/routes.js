import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

const routes = Router();

const upload = multer(multerConfig);

import BookController from './app/controllers/BookController';
import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';

routes.get('/books', BookController.index);
routes.post('/books', BookController.store);
routes.put('/books/:id', BookController.update);
routes.delete('/books/:id', BookController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

export default routes;
