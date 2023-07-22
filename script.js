
// set time and date 
function time(){
  // sets standard time and date------------------------------------
  var myDate = dayjs().format("MMM D, YYYY, hh:mm:ss");
  var date = document.getElementById("time")
  // rendering date to id of time using day js
  date.textContent = myDate;
}
setInterval(time, 1000);

function getGetWeatherApi(){
// my API key---------------------------------------------------------------
var apiKey = "452cbddcfb906f1c82bbd2b57e972548";
// var lat 
// var lon 
// getting the url from weather api---------------------------------------

var cityName = document.getElementById("city").value;
var result = document.getElementById("results");

var requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey;
// "api.openweathermap.org/data/2.5/forecast?lat="+ lat+ "&lon="+lon+"&appid=" + apiKey

// document.getElementById("submit").addEventListener("click", subClick);

// function subClick(cityName){
  console.log(result);


// // Using the weather api and fetchin data------------------------
      fetch(requestUrl)
      .then(function(response){
      return response.json();
      })
      .then(function(response){
      console.log(response);
      })
      }
  
// You will use localStorage to store any persistent data. For more information on how to work with the OpenWeather

 // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={452cbddcfb906f1c82bbd2b57e972548}

getGetWeatherApi();