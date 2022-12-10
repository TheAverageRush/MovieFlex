const ratingsElement = document.getElementById("ratings");
const addElement = document.getElementById("add")
fetch('http//localhost:1337/Database')
.then(function(response){
  console.log("Responding")
})


addElement.addEventListener("click", () => {
  const username = document.getElementById("username-input").value;
  const movie = document.getElementById("movie-name-input").value;
  const ratingsInput = document.getElementById("ratings-input").value;
  
  
  updateRatings();
  additem(username,movie,ratingsInput);
});

function updateRatings() {
  fetch('/getdata').then(response=>response.json())
  .then(data=>{
    console.log(data)
    const ratings = data.movies
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
        <p>${rating.UserName}</p>
        <p>${rating.MovieName}</p>
        <p>${rating.Ratings}</p>
        <div id="delete" onclick="deleteElement(event)">
          <img id="${rating.UserName}" src="./vector.svg" />
        </div>
      </li>
    `
  });

  })
}

updateRatings();

function deleteElement(event) {
  const id = event.target.id;

  fetch('/deletedata',{
    body:JSON.stringify({UserName:id}),
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then(function(response){
      console.log("Data has been deleted")
      updateRatings();
  })
  
}

function additem(UserName,MovieName,Ratings){
  fetch('/sendata',{
    body:JSON.stringify({UserName,MovieName,Ratings}),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then(function(response){
      console.log("Data has been received")
  })
}