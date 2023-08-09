const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((tags) => {
      if (!tags) {
        res
          .status(404)
          .json({ message: "There is no tag with that id. Try again." });
        return;
      }
      res.json(tags);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then((updatedTag) => {
      if (!updatedTag[0]) {
        res
          .status(404)
          .json({ message: "There is no tag with that id. Try again." });
        return;
      }
      res.json({ message: "Tag updated successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((deletedTag) => {
      if (!deletedTag) {
        res
          .status(404)
          .json({ message: "There is no tag with that id. Try again." });
        return;
      }
      res.json({ message: "Tag deleted successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
