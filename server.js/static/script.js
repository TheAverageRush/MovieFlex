const ratingsElement = document.getElementById("ratings");
const addElement = document.getElementById("add")
fetch('http//localhost:1337/Database')
.then(function(response){
  console.log("Responding")
})
let ratings = [
  {
    username: "Clement",
    movieName: "Avengers",
    ratings: 4.5
  },
  {
    username: "John Wick",
    movieName: "Fast & Furious",
    ratings: 4.9
  },
  {
    username: "Chris Evans",
    movieName: "Black Adam",
    ratings: 4.1
  },
]

addElement.addEventListener("click", () => {
  const username = document.getElementById("username-input").value;
  const movie = document.getElementById("movie-name-input").value;
  const ratingsInput = document.getElementById("ratings-input").value;
  
  const ratingsObject = {
    username: username,
    movieName: movie,
    ratings: ratingsInput
  }

  ratings.push(ratingsObject);
  updateRatings();
  additem();
});

function updateRatings() {
  ratingsElement.innerHTML = `
  <li>
    <p>Username</p>
    <p>Movie Name</p>
    <p>Ratings</p>
    <p>Actions</p>
  </li>
  `

  ratings.forEach((rating) => {
    ratingsElement.innerHTML += `
      <li class="rating">
        <p>${rating.username}</p>
        <p>${rating.movieName}</p>
        <p>${rating.ratings}</p>
        <div id="delete" onclick="deleteElement(event)">
          <img id="${rating.username}" src="./vector.svg" />
        </div>
      </li>
    `
  });
}

updateRatings();

function deleteElement(event) {
  const id = event.target.id;

  ratings = ratings.filter((rating) => rating.username !== id)
  updateRatings();
}

function additem(){
  fetch('/sendata',{
    body:JSON.stringify({lol:'2'}),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}