var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/meal/:id", window.handleMealRequest).resolve();
router.on("/meals", window.handleMealsRequest).resolve();
router.on("/reservation/:id", window.handleReservationRequest).resolve();
router.on("/reservations", window.handleReservationsRequest).resolve();
router.on("/review/:id", window.handleReviewRequest).resolve();
router.on("/reviews", window.handleReviewsRequest).resolve();
