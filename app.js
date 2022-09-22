
const storage = new Storage();
const storedLoc = storage.getLocationData();

const ui = new UI();
const weather = new Weather(storedLoc.city, storedLoc.state);

//Get initial weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //Changing location
    weather.changeLocation(city, state);
    
    //Setting new location in storage
    storage.setLocationData(city, state);

    //Retrieving weather
    getWeather();

    //Close modal
    $('#locModal').modal('hide');

});


function getWeather(){
    weather.getWeather()
    .then(weatherData => {
        // Show weather in UI
        ui.showWeather(weatherData);
    })
    .catch(err => console.log(err));

/*

    weather.changeLocation("Chicago", "IL")
    .then(weatherData => {
        console.log("Weather Data 2", weatherData);
    });
*/


}