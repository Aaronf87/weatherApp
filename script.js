var lat
var lon 

document.getElementById("submit").addEventListener("click", subClick)
function subClick(){
    $("#results").text("hi");
}
    
    $("#submit").click(function(){
      $("#results").text(n);
      console.log(n);
    });


// You will use localStorage to store any persistent data. For more information on how to work with the OpenWeather

// Calling the api
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={452cbddcfb906f1c82bbd2b57e972548}


`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={452cbddcfb906f1c82bbd2b57e972548}`

cost = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={452cbddcfb906f1c82bbd2b57e972548}`)
