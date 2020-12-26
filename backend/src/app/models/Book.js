import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        genre: Sequelize.STRING,
        publishing_company: Sequelize.STRING,
        cover: Sequelize.STRING,
        authors: Sequelize.ARRAY(Sequelize.STRING),
      },
      {
        sequelize,
        modelName: 'book',
      }
    );
  }
}

export default Book;
