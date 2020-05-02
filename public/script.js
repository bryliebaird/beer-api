//Define UI variables
const search = document.querySelector('#search-beer');
const favorites = document.querySelectorAll('#fav-btn');

//Load all Event Listeners on the Page (invoke)
addEventListeners();

//Load all Event Listeners on the Page (function def)
function addEventListeners(e){
    // getBeer = get any beer saved from local storage
    document.addEventListener('DOMContentLoaded', getBeer);
    
    // findBeer = make request to API to find beer from search bar
    search.addEventListener('click', findBeer);

    // addFavorites = add the beer to the favorites page
    favorites.addEventListener('click', addFavorites);

}

// This function will get any data saved from Local Storage from any previous sessions. This function will fire immediately when all DOM content on the page is loaded 
function getBeer (e){
    console.log("The getBeer function has executed");

}

// Add beer to the favorites page when button is clicked, will also save it into local storage.
function addFavorites(e){
    console.log("You added something to your favorites list!");

    e.preventDefault();
}


// User will make request to API from the search bar
function findBeer(e){
    console.log("The findBeer function has executed");


}