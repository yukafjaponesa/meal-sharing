window.handleHomeRequest = () => {
  document.body.innerHTML = `

<div class="body">
  <header>
<div class="collapse bg-dark" id="navbarHeader">
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-md-7 py-4">
        <h4 class="text-white">About</h4>
        <p class="text-muted">This app is to share tasty food. You can make a booking and make your own meal to share.</p>
      </div>
      <div class="col-sm-4 offset-md-1 py-4">
        <h4 class="text-white">Contact</h4>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white">Follow on Twitter</a></li>
          <li><a href="#" class="text-white">Like on Facebook</a></li>
          <li><a href="#" class="text-white">Email me</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="navbar navbar-dark bg-dark shadow-sm">
  <div class="container d-flex justify-content-between">
    <a href="#" class="navbar-brand d-flex align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
      <strong>Home</strong>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</div>
</header>

<div class="all">
  <div class="menu">
    <a class="links" href="meals" data-navigo>Meals</a>
    <a class="links" href="reservations" data-navigo>Reservations</a>
    <a class="links" href="reviews" data-navigo>Reviews</a>
  </div>

  <div class="pics-in-home">
    <a href="meals">
      <img class="img-in-home" src="https://images.kitchenstories.io/recipeImages/01_03_OriginalItalienischePizza_titlePicture/01_03_OriginalItalienischePizza_titlePicture-large-landscape-150.jpg" alt="Italian Pizza">
    </a>
    <a href="reservations">
      <img class="img-in-home" src="https://clavertonhotel.co.uk/wp-content/uploads/2015/10/reservations-crop.jpg" alt="Booking note">
    </a>
    <a href="reviews">
      <img class="img-in-home" src="https://www.feedbackexpress.com/wp-content/uploads/2019/10/five-star-feedback.jpg" alt="review">
    </a>
  </div>

</div> <!-- end of all -->

</div> <!-- end of body -->
  `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
