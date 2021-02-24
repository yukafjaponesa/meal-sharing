window.handleReviewRequest = async (params) => {

  const getReviewResponse = await fetch(`/api/reviews/${params.id}`);
  const review = await getReviewResponse.json();
  console.log({review});

  fetch("api/review")
    .then(res => res.json())
    .then(review => console.log(review));

  document.body.innerHTML = `
  ${review.content}

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

    <div class="center-btn" class="bootstrap-btn">
    <input type="submit" value="Submit">
    </div>
    </form>
    `;
};
