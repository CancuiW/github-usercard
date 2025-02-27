/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/CancuiW
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/
//{ urlImage, names, usersName, locations, url, followersNum, followingNum, bioes }
function getCard(content) {
  const card = document.createElement("div")
  const image = document.createElement("img")
  const cardInfo = document.createElement("div")
  const nameH3 = document.createElement("h3")
  const userName = document.createElement("p")
  const location = document.createElement("p")
  const profile = document.createElement("p")
  const link = document.createElement("a")
  const followers = document.createElement("p")
  const following = document.createElement("p")
  const bio = document.createElement("p")
  card.className = "card"
  cardInfo.className = "card-info"
  nameH3.className = "name"
  userName.className = "userName"

  image.src = content.avatar_url
  nameH3.textContent = content.name
  userName.textContent = content.login
  location.textContent = `Location: ${content.location}`
  profile.textContent = "Profile: "
  link.href = content.url
  link.textContent = content.url
  followers.textContent = `followers: ${content.followers}`
  following.textContent = `following: ${content.following}`
  bio.textContent = `Bio: ${content.bio}`

  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(nameH3)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(link)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  return card
}
const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
import axios from "axios"
followersArray.forEach(item => {

  axios.get("https://api.github.com/users/" + item)
    .then(res => {
      const person = getCard(res.data)
      document.querySelector(".cards").appendChild(person)
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      console.log("done")
    })

})





/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



//getCard({ urlImage: "avatar_url", names: "name", usersName: "login", locations: "location", url: "url", followersNum: "followers", followingNum: "following", bioes:"bio" })


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
