const express = require("express");
const { Op } = require("sequelize");
const product = require("../models/products");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const count = parseInt(query.count) || 10; // entries
    const page = parseInt(query.page) || 1; // its in multiple of 10
    const after = parseInt(query.after);
    let sql = {}; // the data will send in this object.

    if (after) {
      sql = {
        where: {
          id: {
            //gt == greater than
            [Op.gt]: after,
          },
        },
      };
    } else {
      sql = {
        offset: count * (page - 1),
      };
    }
    const products = await product.findAll({
      ...sql,
      attributes: ["id", "title", "price", "description", "image", "count"],
      limit: count,
    });
    res.status(200).send({
      count: products.length,
      items: products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: err,
      message: "can not process your request",
    });
  }
});

module.exports = router;
