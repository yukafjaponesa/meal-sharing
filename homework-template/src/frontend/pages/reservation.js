window.handleReservationRequest = params => {
  document.body.innerHTML = `
  <h1>Reservation with id ${params.id}</h1>
    <form action="../../api/reservations" method="post">
    <label for="number_of_guests">number_of_guests:</label>
    <input type="text" id="number_of_guests" name="number_of_guests">
    <br><br>

    <label for="meal_id">meal_id:</label>
    <input type="text" id="meal_id" name="meal_id">
    <br><br>

    <label for="location">location:</label>
    <input type="text" id="location" name="location">
    <br><br>

    <label for="createdAt">createdAt:</label>
    <input type="text" id="createdAt" name="createdAt">
    <br><br>

    <input type="submit" value="Submit">
    </form>
    `;

  fetch("api/reservation")
    .then(res => res.json())
    .then(reservation => console.log(reservation));
};
