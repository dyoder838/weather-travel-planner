// dom elements---------------
var apiKey = "cf54ce47ff5608fa5caf5b89772775c4"

var userInputValue = $("#user-input").val()
var userInputButton = $("#input-button")
// dynamic HTML -------------

    // left column, cities buttons - parent <div>
    var savedCity = $("<button>");
    var savedCityParent = document.querySelector("#left-column > aside > article > div");
    //savedCityParent.append(savedCity)
   
    // right column main info  ----- 
    // var mainInfoParent = document.querySelector("#main\\ info > section")
    // var sectionParent = $(`<div class="section">`)
    // var city = $("<h2>")
    // var date = $("<h3>")
    // var icon = $("<i>")
    // var temp = $("<h3>")
    // var humidity = $("<h3>")
    // var wind = $("<h3>")
    
    var divider = $(`<div class="divider"></div>`)
    //mainInfoParent.append(sectionParent, divider, temp, humidity, wind,)
       //sectionParent.append(city + date + icon)

    // right column, 6-day forcast 
    var fiveDayParent = $("#five-day-forcast-row")
    var fiveDay = $(`<div id="day" class="col s2">`)
    //fiveDayParent.append(fiveDay)
        //fiveDay.append(date, icon, temp, humidity)
    
// get the user input
userInputButton.on("click", function(event){
event.preventDefault()
    var city = $("#user-input").val()
    var currentWxApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=cf54ce47ff5608fa5caf5b89772775c4";
    var fiveDayAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=cf54ce47ff5608fa5caf5b89772775c4";

    $.ajax({
        url: currentWxApi,
        method: "GET"
    })
      // After data comes back from the request
    .then(function(response1) {
            console.log("currentWxApi: ", currentWxApi);

            console.table("response1: ", response1);
            //storing the data from the AJAX request in the results variable
            var results1City = response1.name;
            var results1Date = new Date(response1.dt * 1000);
            var results1Icon = response1.weather[0].icon;
            var results1Temp = response1.main.temp;
            var results1Humidity = response1.main.humidity;
            var results1Wind = response1.wind.speed;
        
            console.log(results1City)
            console.log(results1Date)
            console.log(results1Icon)
            console.log(results1Temp)
            console.log(results1Humidity)
            console.log(results1Wind)
            
            // right column main info  ----- 
            var city = $("<h2>").text(results1City)
            var date = $("<h3>").text(results1Date)
            var icon = $("<i>").text(results1Icon)
            var temp = $("<h3>").text("Temp: " + results1Temp)
            var humidity = $("<h3>").text("Humidity: " + results1Humidity)
            var wind = $("<h3>").text("Wind: " + results1Wind)
            var divider = $(`<div class="divider"></div>`)
                $("#city1").append(city)
                $("#city2").append(date)
                $("#city3").append(icon)
                $("#wx-stats").append(temp, humidity, wind);   

        });

    //  append to 5 day 
     $.ajax({
        url: fiveDayAPI,
        method: "GET"
     })
        .then(function(response2) {
            console.log("5day: ", fiveDayAPI);
    
            console.table("response2: ", response2);
            // storing the data from the AJAX request in the results variable
            for(var i = 0; i < 4; i++){
            var results2Date = response2.list[i].dt_txt
            var results2Temp = response2.list[i].main.temp
            var results2Wind = response2.list[i].wind.speed
          
            console.log(response2.list[i].dt_txt)
            console.log(response2.list[i].main.temp)
            console.log(response2.list[i].wind.speed)
            

            
            // 5 day dom
            // right column, 6-day forcast 
            var fiveDayParent = $("#five-day-forcast-row")
            var fiveDay = $(`<div id="day" class="col s2">`)
            //fiveDayParent.append(fiveDay)
            //fiveDay.append(date, icon, temp, humidity)
            };
         
        });

    

});     