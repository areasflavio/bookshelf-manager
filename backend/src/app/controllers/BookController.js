import Book from '../models/Book';

class BookController {
  async index(request, response) {
    const books = await Book.findAll();

    return response.json(books);
  }

  async store(request, response) {
    const { name } = request.body;

    const bookExists = await Book.findOne({ where: { name } });

    if (bookExists) {
      return response.status(400).json({ error: 'Book already registered' });
    }

    const { id, genre, publishing_company, cover, authors } = await Book.create(
      request.body
    );

    return response
      .status(201)
      .json({ id, name, genre, publishing_company, cover, authors });
  }

  async update(request, response) {
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
    } = await book.update(request.body);

    return response
      .status(200)
      .json({ id, name, genre, publishing_company, cover, authors });
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
