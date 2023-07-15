var lat
var lon 
apiKey = "452cbddcfb906f1c82bbd2b57e972548"
let url = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=apiKey`

var i = new Date().getDay;
console.log(i);


// set time and date 
function time(){
  // sets standard time and date
  var myDate = new Date()
  // display without timezone
  myDate = myDate.toUTCString();
  // grabbing element and saving to var date
  var date = document.getElementById("time")
  // rendering date to id of time
  date.textContent = myDate;
}
setInterval(time, 1000);




document.getElementById("submit").addEventListener("click", subClick)
function subClick(){
cityName = document.querySelector("#city").value;
console.log (cityName)
}
    
    $("#submit").click(function(){
      $("#results").text(n);
      console.log(n);
    });

  


// You will use localStorage to store any persistent data. For more information on how to work with the OpenWeather

// Calling the api
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={452cbddcfb906f1c82bbd2b57e972548}


`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={452cbddcfb906f1c82bbd2b57e972548}`
