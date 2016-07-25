
window.onload = function () {
    console.log('window loaded')
    var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var apiKey = '&APPID=9c699d0c651ffd12127309638260a1c3';
    var units = '&units=metric';
    var url = api + input.value + apiKey + units;
    // making the request
    var request = new XMLHttpRequest();
    // where the request is going
    request.open("GET", url);
    // what to do when the request completes
    request.onload = function () {
        if (request.status === 200) {
            var jsonString = request.responseText;
            // convert to JS object
            var weather = JSON.parse(jsonString);

            console.log(weather)
            console.log(weather.main.temp) 
            var temp = weather.main.temp;
            console.log(temp);
            console.log(weather.wind.speed) 
            var wind = weather.wind.speed
            console.log(wind);

            main(weather);
            displayWeather(weather);  
        }
    }
    request.send(null);


    function main(weather){
        var button = document.getElementById('add-button');
        button.onclick = handleClick;
        console.log(weather.main.temp)

        var form = document.getElementById('city-form');
        form.onsubmit = function( event ) {
        event.preventDefault();
        handleClick();
        }
      }

    
    var handleClick = function(event){
        var url = api + input.value + apiKey + units;
        var userInput = document.getElementById('input')
        var cityName = userInput.value;
         console.log('I got clicked!') 
         console.log(input.value)
         console.log(url)
         console.log('city: ', cityName)
         // console.log(weather.main.temp)
         // console.log(wind)
        }

      function displayWeather(weather){
        // var url = api + input.value + apiKey + units;
        var temperature = document.getElementById('temperature')
        temperature.innerText = "Temp is: " + weather.main.temp + ' oC'
        var windspeed = document.getElementById('wind-speed')
        windspeed.innerText = "Wind speed is: " + weather.wind.speed + 'mph'
        }   



    

};


