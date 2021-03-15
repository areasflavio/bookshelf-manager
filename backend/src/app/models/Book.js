import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        isbn: Sequelize.STRING,
        title: Sequelize.STRING,
        genre: Sequelize.STRING,
        synopsis: Sequelize.STRING,
        publishing_company: Sequelize.STRING,
        pages: Sequelize.STRING,
        authors: Sequelize.ARRAY(Sequelize.STRING),
      },
      {
        sequelize,
        modelName: 'book',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.file, {
      foreignKey: 'cover_id',
      as: 'cover',
    });

    this.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export default Book;
