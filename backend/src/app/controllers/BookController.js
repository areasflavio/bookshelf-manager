import * as Yup from 'yup';

import Book from '../models/Book';
import User from '../models/User';
import File from '../models/File';

class BookController {
  async index(request, response) {
    const books = await Book.findAll({
      attributes: [
        'id',
        'title',
        'synopsis',
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

  async show(request, response) {
    const book = await Book.findByPk(request.params.id, {
      attributes: [
        'id',
        'title',
        'synopsis',
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

    if (!book) {
      return response.status(400).json({ error: 'Book not found' });
    }

    return response.json(book);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      genre: Yup.string().required(),
      synopsis: Yup.string().required(),
      publishing_company: Yup.string().required(),
      cover: Yup.string().required(),
      authors: Yup.array().of(Yup.string()).required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { title } = request.body;

    const bookExists = await Book.findOne({ where: { title } });

    if (bookExists) {
      return response.status(401).json({ error: 'Book already registered' });
    }

    const {
      id,
      genre,
      synopsis,
      publishing_company,
      cover,
      authors,
    } = await Book.create({ ...request.body, user_id: request.userId });

    return response
      .status(201)
      .json({ id, title, genre, synopsis, publishing_company, cover, authors });
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      genre: Yup.string().required(),
      synopsis: Yup.string().required(),
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
      return response.status(401).json({ error: 'Book not registered' });
    }

    const bookExists = await Book.findOne({
      where: { name: request.body.title },
    });

    if (bookExists && book.id !== bookExists.id) {
      return response.status(400).json({ error: 'Book already registered' });
    }

    const {
      title,
      genre,
      synopsis,
      publishing_company,
      cover,
      authors,
      user_id,
    } = await book.update({ ...request.body, user_id: request.userId });

    return response.status(200).json({
      id,
      title,
      genre,
      synopsis,
      publishing_company,
      cover,
      authors,
      user_id,
    });
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
