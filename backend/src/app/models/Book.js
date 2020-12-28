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

    return this;
  }

  static associate(models) {
    this.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export default Book;
