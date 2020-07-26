window.handleReviewsRequest = async () => {
  document.body.innerHTML = `
  <h1>Reviews</h1>
  <ul></ul>
  `;

const reviewsResponse = await fetch('/api/reviews');
const reviews = await reviewsResponse.json();

const ul = document.querySelector('ul');
reviews.forEach(review => {
  const li = document.createElement('li');
  li.innerHTML = Object.entries(review); 
  ul.appendChild(li);
})
};
