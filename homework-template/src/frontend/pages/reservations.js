window.handleReservationsRequest = async () => {
  document.body.innerHTML = `
  <div class="body">
    <h1>Reservations</h1>
    <p>Shown your name</p>

    <div class="top">
      <ul class="ul-in-reservations"></ul>

      <div class="dine-img-in-reservations">
        <img src="https://blog.headout.com/wp-content/uploads/2016/07/shutterstock_405825322-770x386.jpg" alt="dine">
      </div>
    </div> <!-- end of contents-in-reservations -->

  </div> <!-- end of body -->
  `;

  const reservationsResponse = await fetch('/api/reservations');
  const reservations = await reservationsResponse.json();
  const ul = document.querySelector('ul');
  reservations.forEach(reserve => {
      const li = document.createElement('li');
      li.innerHTML = reserve.name;
      ul.appendChild(li);
  });

};
