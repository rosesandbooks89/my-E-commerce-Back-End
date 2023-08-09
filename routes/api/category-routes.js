const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // TODO find all categories
  try {
    const categoryData = await Category.findAll({
      // TODO be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // TODO find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
  // TODO be sure to include its associated Products
  include: [{ model: Product }],
  where: { id: req.params.id },
});
if (!categoryData) {
  res.status(404).json({ message: 'There is not a category with that name. Try again.' });
  return;
}
res.status(200).json(categoryData);
} catch (err) {
res.status(500).json(err);
}
});

router.post('/', async (req, res) => {
  // TODO create a new category
  try {
    const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then((updatedCategory) => {
      if (!updatedCategory[0]) {
        res.status(404).json({ message: 'There is no category with that id. Try again.' });
        return;
      }
      res.json({ message: 'Category updated successfully.' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((deletedCategory) => {
      if (!deletedCategory) {
        res
          .status(404)
          .json({ message: "There is no category with that id. Try again." });
        return;
      }
      res.json({ message: "Category deleted successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
