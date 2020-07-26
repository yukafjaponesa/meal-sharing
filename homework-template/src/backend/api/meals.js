const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  const {
    meals,
    maxPrice,
    availableReservations,
    title,
    createdAfter,
    limit
  } = req.query;

  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
      let meals = await knex.select("*").table("meal");


    if(maxPrice) {
      console.log("maxPrice", maxPrice);
      const getMaxPrice = parseInt(maxPrice);
      meals = await knex("meal").select().where("price", "<", getMaxPrice);
      // const cheapMeals = meals.filter(meal => {
      //   return meal.price < 70;
    } //)

    if(availableReservations === "true") { //all queryparam comes into string, so need to be "true"
      meals = await knex
        .from("meal")
        .select("*")
        .sum({ total: "reservation.number_of_guests" })
        .leftJoin("reservation", {"meal.id": "reservation.meal_id" })
        //.where("meal.maxNumberOfGuests", "<", knex.fn.now())
        .groupBy("meal.id")
        .having(knex.raw("sum(total)"), "<", "meal.maxNumberOfGuests");//table name and column name
    }

    if(title) {
      meals = await knex("meal").where("title", "like", `%${title}%`);
    }

    if(createdAfter) {
      const dateCreatedAfter = new Date(createdAfter);
      meals = await knex("meal")
        .select()
        .where("createdAt", ">", dateCreatedAfter);
    }

    if(limit) {
      const numOfMeal = parseInt(limit);
      meals = await knex.select().from("meal").limit(numOfMeal);
    }

    // const getResult = await meals.select("*");
    //
    // if(getResult.length === 0 || availableReservations === "false") {
    //   res.status(404).send(`Error 404. Meals not found`);
    // }

    //console.log(DB_NAME);

    res.json(meals);

  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res) => {
  try {
    const myTitle = req.body.Title;
    const myMaxNumberOfGuests = req.body.MaxNumberOfGuests;
    const myDescription = req.body.Description;
    const myCreatedAt = req.body.CreatedAt;
    const myPrice = req.body.Price;

    const newId = await knex('meal').insert(
      {
        title: myTitle,
        maxNumberOfGuests: myMaxNumberOfGuests,
        description: myDescription,
        createdAt: myCreatedAt,
        price: myPrice
      }
    );
    res.json(`created new meal with id ${newId}`)
  } catch (error) {
    throw error;
  }
});

/*
router.post("/", async (req, res) => {
  //console.log(req.body);
  try {
    console.log(`req.body = ${JSON.stringify(req.body)}; title = ${req.body.title}, price = ${req.body.price}`);
    // got result as: req.body = {"Title":"falafel","Price":"25"}; title = undefined, price = undefined
    // the difference is uppercase or lowercase Title/title

    // res.json(req.body); write this and insert in postman then get the result in there
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const {
      title,
      maxNumberOfGuests,
      description,
      createdAt,
      price
    } = req.body;

    const addNewMeal = {
      title,
      maxNumberOfGuests,
      description,
      createdAt,
      price
    };

    const addMeal = await knex("meal").insert(addNewMeal); // insert(req.body);
    //console.log( `addMeal = ${addMeal}`)
    res.json(`added meal ${addMeal}`); //res.json(req.body);
  } catch (error) {
    throw error;
  }
});
*/

router.get("/:id", async (request, response) => {
  try {
    const mealId = parseInt(request.params.id);
      const getMealWIthID = await knex("meal").where({ id: mealId });
      response.json(getMealWIthID);
  } catch (error) {
    throw error;
  }
});

// router.get('/:id', async function(req, res) {
//     //console.log(`params.id=${req.params.id}`);
//     try {
//       const thisMeal = await knex("meal")
//       .select("*") // const oneMeal = thisMeal.filter(m => m.id === 11)
//       .where(req.params) // .where({'id' : req.params.id})
//       res.json(thisMeal[0]);
//     } catch (error) {
//       throw error;
//     }
// });

router.put('/:id', async function(req, res) {
  const {maxNumberOfGuests} = req.body;
  const {id} = req.params;

    try {
      const thisMeal = await knex("meal")
      .where({id})
      .update({maxNumberOfGuests});
      res.send('updated');
    } catch (error) {
      throw error;
    }
});


router.delete('/:id', async function (req, res) {
    console.log(req.params);
    const { id } = req.params;

    await knex("meal").where({ id }).del();
    res.send(`Meal with id ${id} is deleted`);
});


module.exports = router;
