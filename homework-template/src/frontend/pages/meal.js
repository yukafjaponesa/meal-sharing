// /* class from Alex */
// window.handleMealRequest = params => {
//   document.body.innerHTML = `
//   <h1>Make a booking for meal with id ${params.id}</h1>
//     <form action="../../api/reservations" method="post">
//       <label for="name">Name:</label>
//       <input type="text" id="name" name="name">
//       <br><br>
//
//       <label for="email">Email:</label>
//       <input type="text" id="email" name="email">
//       <br><br>
//
//       <label for="number_of_guests">Number of guests:</label>
//       <input type="int" id="number_of_guests" name="number_of_guests">
//       <br><br>
//
//       <input type="submit" value="Submit">
//     </form>`
//
//     const getMealResponse = await fetch(`/api/meals/${params.id}`);
//    const getMeal = await getMealResponse.json();
//
//
//     fetch(`api/meals/${params.id}`)
//       .then(res => res.json());
//       //.then(meal => console.log(meal)); //.then(meal => console.log(meal));
//
// };

/*
function getMealWithId(mealFromDB) {
  const ul = document.createElement('ul');

  mealFromDB.forEach(meal => {
    console.log(typeof meal);
    const li = document.createElement('li');
    li.innerHTML = Object.entries(meal);
    ul.appendChild(li);
    document.body.appendChild(ul);
  })
};
*/

  window.handleMealRequest = async(params)=> {
    const getMealResponse = await fetch(`/api/meals/${params.id}`);
    const meals = await getMealResponse.json();
    const meal = meals[0];

    const getReview = await fetch(`/api/reviews`);
    const reviewToRender = await getReview.json();
    fetch(`/api/meals/${params.id}`)
      .then(res => res.json())
      .then(meal => {
        meal.forEach(m => {
          m.getReview = reviewToRender.filter(reviewToRender => meal.id === reviewToRender.meal_id);
          return m;
        })
      })

     document.body.innerHTML =
     `
     <div class="body">
       <h1>Meal with id ${params.id}</h1>

       <div class="meal-detail">ID: ${meal.id}</div>
       <div class="meal-detail">Title: ${meal.title}</div>
       <div class="meal-detail">Description: ${meal.description}</div>
       <div class="meal-detail">Price: ${meal.price}</div>

       <div class="form-and-pic">
        <div class="booking-form">
         <form action="../../api/reservations" method="post">
           <label for="name">Name:</label>
           <input type="text" id="name" name="name" placeholder="Your full name">
           <br><br>

           <label for="email">Email:</label>
           <input type="email" id="email" name="email" placeholder="email@mail.com">
           <br><br>

           <label for="number_of_guests">Number of guests:</label>
           <input type="int" id="number_of_guests" name="number_of_guests" placeholder="0">
           <br><br>

           <input type="hidden" id="meal_id" name="meal_id" value="${params.id}">

           <input type="hidden" id="createdAt" name="createdAt" value="currentDate">

           <div class="center-btn" class="bootstrap-btn">
            <input  type="button" class="btn btn-primary" value="Make a booking">
          </div>
         </form>

         <div>
         <br>
          <p>You can see your booking in Reservation page.</p>
         </div>
        </div> <!-- end of booking-form -->

        <div>
          <img id="meal-pic" class="img-in-meals" src="/pages/pics/${meal.title}.jpg" alt="${meal.title}">
        </div> <!-- end of meal-pic -->
        </div> <!-- end of form-and-pic -->


      </div> <!-- end of body -->

     `;
};



function currentDate() {
  const d = new Date();
  document.getElementById('createdAt').value = d.toDateString();
};




/* original
window.handleMealRequest = params => {
  document.body.innerHTML = `
  <h1>Meal with id ${params.id}</h1>
    <form action="../../form_action.js" method="post">
    <label for="name">title:</label>
    <input type="text" id="title" name="title">

    </form>
  `;
};
*/
