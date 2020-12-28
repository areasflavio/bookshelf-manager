import * as Yup from 'yup';

import Book from '../models/Book';
import User from '../models/User';
import File from '../models/File';

class BookController {
  async index(request, response) {
    const books = await Book.findAll({
      attributes: [
        'id',
        'name',
        'genre',
        'publishing_company',
        'cover',
        'authors',
      ],
      include: {
        model: User,
        as: 'user',
        attributes: ['name', 'email'],
        include: {
          model: File,
          as: 'avatar',
          attributes: ['path', 'url'],
        },
      },
    });

    return response.json(books);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      genre: Yup.string().required(),
      publishing_company: Yup.string().required(),
      cover: Yup.string().required(),
      authors: Yup.array().of(Yup.string()).required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { name } = request.body;

    const bookExists = await Book.findOne({ where: { name } });

    if (bookExists) {
      return response.status(400).json({ error: 'Book already registered' });
    }

    const {
      id,
      genre,
      publishing_company,
      cover,
      authors,
    } = await Book.create({ ...request.body, user_id: request.userId });

    return response
      .status(201)
      .json({ id, name, genre, publishing_company, cover, authors });
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      genre: Yup.string().required(),
      publishing_company: Yup.string().required(),
      cover: Yup.string().required(),
      authors: Yup.array().of(Yup.string()).required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { id } = request.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return response.status(400).json({ error: 'Book not registered' });
    }

    const {
      name,
      genre,
      publishing_company,
      cover,
      authors,
      user_id,
    } = await book.update({ ...request.body, user_id: request.userId });

    return response
      .status(200)
      .json({ id, name, genre, publishing_company, cover, authors, user_id });
  }

  async delete(request, response) {
    const { id } = request.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return response.status(400).json({ error: 'Book not registered' });
    }

    return response.json({ message: 'ok' });
  }
}

export default new BookController();
