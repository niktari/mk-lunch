// save your sheet ID and name of the tab as variables for use
let sheetID = "1azsSoBtfTeXsxOZgViUkqY6AudTebw7d_NZ2ejJKtqM";
let tabName = 'Sheet1'

// format them into Ben's uri
const opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`

let replaceElem = document.getElementById('replace');
let regenerateButton = document.getElementById('regenerate');
let addRestaurantButton = document.getElementById('add-restaurant');

fetchRestaurant();

regenerateButton.onclick = function() {
    fetchRestaurant();
}

async function fetchRestaurant() {

fetch(opensheet_uri)
try {
    const response = await fetch(opensheet_uri);
    const data = await response.json();
    console.log(data);

    let randomRestaurantIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomRestaurantIndex].Restaurant)
    replaceElem.innerHTML = data[randomRestaurantIndex].Restaurant;
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 60%)`

} catch(error) {
    console.error(error.message);
}
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {

    //     let randomRestaurantIndex = Math.floor(Math.random() * data.length);

    //     console.log(data[randomRestaurantIndex].Restaurant)

    //     replaceElem.innerHTML = data[randomRestaurantIndex].Restaurant;

    // })
    // .catch(function (err) {
    //     console.log("Something went wrong!", err);
    // });

}