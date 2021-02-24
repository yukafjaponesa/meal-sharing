const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  const {
    reviews,
    numberOfStars,
    content,
    meal_id,
    createdAt,
  } = req.query;

  try {
    let allReviews = await knex.select("*").table("review");
    res.json(allReviews);
  } catch (error) {
    throw error;
  }
});


router.post("/", async (req, res) => {
  try {
    const myStar = req.body.numberOfStars;
    const myContent = req.body.content;
    const myMealId = req.body.meal_id;
    const myCreatedAt = req.body.createdAt;

    const newId = await knex('review').insert(
      {
        numberOfStars: myStar,
        content: myContent,
        meal_id: myMealId,
        createdAt: myCreatedAt
      }
    )

  res.json(`created new review with id ${newId}`);
  } catch (error) {
    throw error;
  }
});

router.get('/:id', async function(req, res) {
    try {
      const thisReserve = await knex("review")
      .select("*")
      .where(req.params)
      res.send(thisReserve[0]);
    } catch (error) {
      throw error;
    }
});

router.put('/:id', async function(req, res) {
  const {numberOfStars} = req.body;
  const {id} = req.params;

    try {
      const thisReserve = await knex("review")
      .where({id})
      .update({numberOfStars})
      res.send('updated');
    } catch (error) {
      throw error;
    }
});

router.delete('/:id', async function (req, res, next) {
  try {
    let id = parseInt(req.params.id);

    await knex("review").delete(id);
    res.send('deleted ',id);
  } catch (error) {
    throw error;
  }
});


module.exports = router;
