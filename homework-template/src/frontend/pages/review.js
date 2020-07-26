window.handleReviewRequest = params => {
  document.body.innerHTML = `
  <h1>Review with id ${params.id}</h1>
    <form action="../../api/reviews" method="post">
    <label for="numberOfStars">numberOfStars:</label>
    <input type="text" id="numberOfStars" name="numberOfStars">
    <br><br>

    <label for="content">content:</label>
    <input type="text" id="content" name="content">
    <br><br>

    <label for="meal_id">meal_id:</label>
    <input type="text" id="meal_id" name="meal_id">
    <br><br>

    <label for="createdAt">createdAt:</label>
    <input type="text" id="createdAt" name="createdAt">
    <br><br>

    <input type="submit" value="Submit">
    </form>
    `;

    fetch("api/review")
      .then(res => res.json())
      .then(review => console.log(review));
};
