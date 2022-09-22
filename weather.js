class Weather {
    
    constructor(city, state){

        this.appid = "77a33dca09370c32349e838e4cab4aae";
        this.city = city;
        this.state = state;
        this.lat = 0;
        this.lon = 0;
        this.metric = 'imperial';

    }


    //use geocode API to convert city and state to lat and lon
    async getLatLon(city, state, appid){
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=5&appid=${appid}`);
        const data = await response.json()
        .then(data => {
            //log all results from geocode API
            //console.log("Geocode API Response: ", data);
            //take the top result in the geocode response object array
            data = data[0];
            
            //new object to store only the points so it can be passed to weather API later
            const points = {};
            points.lat = data.lat;
            points.lon = data.lon;

            return points;
        });
        
        //logging object with coordinates
       // console.log("Log of getLatLon return:", data);
        
        this.lat = data.lat;
        this.lat = data.lon;

        return data;
    }



    //Fetch weather
    async getWeather(){
        
        //Get lat and lon based on the city and state passed in the new object
        const data = await this.getLatLon(this.city, this.state, this.appid);
        
        this.lat = data.lat;
        this.lon = data.lon;
        
        //console.log(`lat: ${this.lat} lon: ${this.lon}`);

        //Calling the weather API to get weather based on coordinates
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=${this.metric}&appid=${this.appid}`);
        
        const responseData = await response.json();
        return responseData;
    }

    //Change location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }

}