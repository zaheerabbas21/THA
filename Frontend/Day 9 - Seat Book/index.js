const seats = document.getElementById("seats");
const occupiedSeats = document.getElementById("seat-occ");
const remainingSeats = document.getElementById("seat-rem");
let occupiedSeatsNum = 0;
let remainingSeatsNum = 36;

function renderSeats() {
  occupiedSeats.innerText = occupiedSeatsNum;
  remainingSeats.innerText = remainingSeatsNum;
}

function handleClick(event) {
  const seat = event.target;
  if (seat.classList.contains("unblocked")) {
    const book = confirm("Are you sure to about Booking this Seat?");
    if (book === true) {
      seat.classList.remove("unblocked");
      seat.classList.add("blocked");
      occupiedSeatsNum++;
      remainingSeatsNum--;
      renderSeats();
    }
  } else {
    alert("Seat Already Booked");
  }
}

function init() {
  let htmlString = "";
  for (let i = 1; i <= 36; i++) {
    htmlString += '<div class="seat unblocked"></div>';
  }
  seats.innerHTML = htmlString;
  const allSeats = document.querySelectorAll(".seat");
  const seatsArray = Array.from(allSeats);
  seatsArray.forEach((seat) => {
    seat.addEventListener("click", handleClick);
  });
}
init();
