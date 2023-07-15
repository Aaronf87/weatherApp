var lat
var lon 
apiKey = "452cbddcfb906f1c82bbd2b57e972548"
let url = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=apiKey`

// set time and date 
function time(){
  var myDate = new Date();
  var date = document.getElementById("time")
  date.innerHTML = myDate;
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
