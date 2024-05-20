const express = require('express');
const router = express.Router();
const { getAllFilms, getFilmById, getAllCategories, getFilmsByCategory } = require('../queries/queries');

router.get('/films', async (req, res) => {
  const films = await getAllFilms();
  res.json(films);
});

router.get('/films/:id', async (req, res) => {
  const film = await getFilmById(req.params.id);
  res.json(film);
});

router.get('/categories', async (req, res) => {
  const categories = await getAllCategories();
  res.json(categories);
});

router.get('/categories/:id/films', async (req, res) => {
  const films = await getFilmsByCategory(req.params.id);
  res.json(films);
});

module.exports = router;
