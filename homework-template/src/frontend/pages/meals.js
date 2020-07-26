window.handleMealsRequest = async () => {
  document.body.innerHTML = `
  <div class="body">
  <h1>Meals</h1>

    <div class="top">
      <div class="ul">
        <ul></ul>
      </div>

      <div class="curry-pics-in-meals">
        <img id="indian-curry-pic" class="img-in-meals" src="https://media-cdn.tripadvisor.com/media/photo-s/15/a5/5d/02/for-indian-food-visit.jpg" alt="curry">
      </div>
    </div> <!-- end of top -->

    <div class="pics-in-rows">
      <div class="pics-in-meals">
        <img class="img-in-meals" src="https://images.kitchenstories.io/recipeImages/01_03_OriginalItalienischePizza_titlePicture/01_03_OriginalItalienischePizza_titlePicture-large-landscape-150.jpg" alt="pizza">
        <img class="img-in-meals" src="https://cdn.kiekmo.hamburg/vary/2018/11/sushi-restaurant-wandsbek_content-728x410.jpg" alt="sushi">
        <img class="img-in-meals" src="https://i.pinimg.com/originals/e8/22/72/e82272ab3e475cbde587dc5bc0220398.jpg" alt="sandwich">
      </div>
      <div class="pics-in-meals">
        <img class="img-in-meals" src="https://i.pinimg.com/originals/3b/3b/e2/3b3be26e3738c3b743307c3fca54998e.jpg" alt="tapas">
        <img class="img-in-meals" src="https://cdn1.jernejkitchen.com/sites/default/files/pork-roast-and-sauerkraut-burger-1-jernejkitchen.jpg" alt="burger">
        <img class="img-in-meals" src="https://img.chefkoch-cdn.de/rezepte/158691069499301/bilder/852457/crop-960x720/original-wiener-schnitzel.jpg" alt="schnitzel">
      </div>
    </div> <!-- end of pics-in-rows -->
  </div> <!-- end of body -->
  `;

const mealsResponse = await fetch('/api/meals');
const meals = await mealsResponse.json();
console.log(typeof meals); // is object

const ul = document.querySelector('ul');
meals.forEach(meal => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="/meal/${meal.id}">${meal.title}</a>`; //keys with keys values with values
  // entries show both key & values

  console.log(meal);
  ul.appendChild(li);
})
};

/*
fetch('/api/meals')
  .then(resposnse => response.json())
  .then(meals => {
    const ul = document.createElement('ul');
    meals.forEach(e => {
      cont li = document.createElement('li');
      li.innerHTML = `<h1>${e.title}</h1>`;

      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  })
  */

/*
function renderMeals(meal) {
  const ul = document.querySelector("ul");

  meals.forEach((meal) => {
    const li = document.createElement("li");
    li.innerHTML = meal;
    ul.appendChild(li);
  })
  document.body.appendChild(ul);
};

window.handleMealsRequest = async () => {
  document.body.innerHTML = `
  <h1>Meals</h1>
  <ul></ul>`;

    fetch('/api/meals')
      .then(response => response.json())
      .then(renderMeals);
};
*/

  // make sure the backend api works before working with it here

  // const mealsResponse = await fetch("/api/meals");
  // const meals = await mealsResponse.json();
