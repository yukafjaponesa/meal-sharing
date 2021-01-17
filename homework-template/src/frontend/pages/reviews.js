window.handleReviewsRequest = async () => {
  document.body.innerHTML = `
  <div class="body">
    <h1>Reviews</h1>
    <ul></ul>
  </div> <!-- end of body -->
  `;

const reviewsResponse = await fetch('/api/reviews');
const reviews = await reviewsResponse.json();

reviews.forEach(review => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  //li.innerHTML = Object.entries(review);
  //li.innerHTML = review.meal_id;
  li.innerHTML =
  `
    <a href="/review/${review.meal_id}">${review.numberOfStars} : ${review.content}</a>
  `;
  ul.appendChild(li);
})
};
