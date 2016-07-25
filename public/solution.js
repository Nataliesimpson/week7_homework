window.onload = function () {
    console.log('window loaded')
    var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var apiKey = '&APPID=9c699d0c651ffd12127309638260a1c3';
    var units = '&units=metric';
    var url = api + input.value + apiKey + units;
    getAjax(url, main)
  }
  
  var getAjax = function(url, callback){
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

            callback(data); 
        }
    }
    request.send(null);

  }  







