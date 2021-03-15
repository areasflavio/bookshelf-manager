module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'bookshelf_manager',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
