import { Router } from 'express';

const routes = Router();

import BookController from './app/controllers/BookController';

routes.get('/books', BookController.index);
routes.post('/books', BookController.store);
routes.put('/books/:id', BookController.update);
routes.delete('/books/:id', BookController.delete);

export default routes;
