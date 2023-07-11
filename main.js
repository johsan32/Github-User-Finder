//api js den import işlevi
import users from "./api.js";
const githubUser = new users();
//console.log(githubUser);
import htmlCard from "./ui.js";
const githubCard = new htmlCard();
//console.log(githubCard);
//API_URL = 'https://api.github.com/users/'

//!html erişim değişkenleri
const searchInput = document.querySelector("#search-input");
const searchButton= document.querySelector("#search-button");
const userCard = document.querySelector("#user-card");
const darkTheme = document.querySelector("#btn-theme");
const body = document.querySelector('body');
const spanTheme = document.querySelector("#dark-mod")
const footerImage = document.querySelector("#footer-img");

//console.log(searchInput, searchButton, userCard);

//!search alanı izleme
searchButton.addEventListener("click", getInput);
searchInput.addEventListener("keydown",(e) => {
  if (e.key === "Enter") {
    getInput();
  }
});
//inputtaki değeri yazdırma
function getInput() {
  if (searchInput.value !== ""){
    githubUser.getUsers(searchInput.value).then((data) => {
  if (data.userProfile.message === "Not Found"){
    githubCard.showAlert("Username not found.", "bg-danger");
    searchInput.value="";
  } else{
    githubCard.showAlert("User successfully found.", "bg-success");
    githubCard.showCard(data.userProfile)
    githubCard.showRepo(data.userRepos)
    githubCard.showImg(data.userProfile)
    console.log(data.userProfile)
    searchInput.value="";
  }
  });
    return;
  }
  githubCard.showAlert("Form field cannot be empty.", "bg-warning");

}
darkTheme.addEventListener("click", changeTheme)
function changeTheme() {

  body.classList.toggle("bg-dark")
  body.classList.toggle("text-bg-dark");
  if (body.classList.contains('bg-dark')){
    spanTheme.innerText= "";
    spanTheme.innerHTML= '<i class="fa-regular fa-moon fs-4"></i>';
    footerImage.classList.remove("text-dark")
    footerImage.classList.add("text-white");
    //console.log(body.classList)
  }else{
    spanTheme.innerText= "";
    spanTheme.innerHTML= '<i class="fa-regular fa-sun fs-4"></i>';
    footerImage.classList.remove("text-white")
    footerImage.classList.add("text-dark");
    //console.log(body.classList)


  }

}