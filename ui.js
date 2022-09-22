class UI {

    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    showWeather(data){
        //Location name
        this.location.textContent = data.name;
        
        //Weather description
        let descString;
        descString = data.weather[0].description;
        this.description.textContent = descString;

        //Temp
        this.temp.textContent = `${data.main.temp} °F`;

        //Icon
        let iconURL;
        iconURL = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        this.icon.setAttribute('src', iconURL);
                
        //Humidity
        this.humidity.textContent = `Humidity: ${data.main.humidity}`;

        //Feels like
        this.feelsLike.textContent = `Feels Like: ${data.main.feels_like} °F`;

        //Wind
        this.wind.textContent = `Wind: ${data.wind.speed} Miles per Hour`;

    }

}