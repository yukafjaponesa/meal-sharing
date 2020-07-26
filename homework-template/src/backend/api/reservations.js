const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  const {
    reservations,
    number_of_guests,
    meal_id,
    name,
    createdAt,
    email
  } = req.query;

  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
      let reservations = await knex.select("*").table("reservation");

    res.json(reservations);

  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    // const {
    //   number_of_guests,
    //   meal_id,
    //   location,
    //   createdAt
    // } = req.body;
    //
    // const addNewReservations = {
    //   number_of_guests,
    //   meal_id,
    //   location,
    //   createdAt
    // };

    //const addReserve = await knex("reservation").insert(addNewReservations);

    const myNumberOfGuests = req.body.number_of_guests;
    const myMealId = req.body.meal_id;
    const myName = req.body.name;
    const myCreatedAt = req.body.createdAt;
    const myEmail = req.body.email;

    const newId = await knex('reservation').insert(
      {
        number_of_guests: myNumberOfGuests,
        meal_id: myMealId,
        name: myName,
        createdAt: myCreatedAt,
        email: myEmail
      }
    );
    res.json(`created new reservation with id ${newId}`);
  } catch (error) {
    throw error;
  }
});

router.get('/:id', async function(req, res) {
    //console.log(`params.id=${req.params.id}`);
    try {
      const thisReserve = await knex("reservation")
      .select("*")
      .where(req.params)
      res.send(thisReserve[0]);
    } catch (error) {
      throw error;
    }
});

router.put('/:id', async function(req, res) {
  const {number_of_guests} = req.body;
  const {id} = req.params;

    try {
      const thisReserve = await knex("reservation")
      .where({id})
      .update({number_of_guests})
      res.send('updated');
    } catch (error) {
      throw error;
    }
});

router.delete('/:id', async function (req, res) {
    const { id } = req.params;

    await knex("reservation").where({ id }).del();
    res.send(`Reservation with id ${id} is deleted`);
});


module.exports = router;
