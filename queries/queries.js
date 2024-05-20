const { Film, Category, FilmCategory } = require('../models');

const getAllFilms = async () => {
  return await Film.findAll();
};

const getFilmById = async (id) => {
  return await Film.findByPk(id);
};

const getAllCategories = async () => {
  return await Category.findAll();
};

const getFilmsByCategory = async (categoryId) => {
  return await Film.findAll({
    include: [{
      model: FilmCategory,
      where: { category_id: categoryId }
    }]
  });
};

module.exports = {
  getAllFilms,
  getFilmById,
  getAllCategories,
  getFilmsByCategory,
};
