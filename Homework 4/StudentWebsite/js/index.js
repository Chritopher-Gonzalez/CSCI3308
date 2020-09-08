//helper functions
function getTempColor(temp){
  if(temp <= 10){
    return "#6495ED";
  }
  else if(temp > 10 && temp <= 20){
    return "#7FFFD4";
  }
  else if(temp > 20 && temp <= 30){
    return "#0000FF";
  }
  else if(temp > 30 && temp <= 40){
    return "#008B8B";
  }
  else if(temp > 40 && temp <= 50){
    return "#00BFFF";
  }
  else if(temp > 50 && temp <= 60){
    return "#F08080";
  }
  else if(temp > 60 && temp <= 70){
    return "#CD5C5C";
  }
  else if(temp > 70 && temp <= 80){
    return "#8B0000";
  }
  else if(temp > 80 && temp <= 90){
    return "#B22222";
  }
  else if(temp > 90){
    return "#FF0000"
  }
  return "#808080";
}

function getFarenheitTemp(temp){
  return (9*temp/5)+32;
}

//main code
$(document).ready(function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url
    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop

     Object.keys(state_info).forEach(function(key) {
        var latitude = state_info[key].lat.toString();
        var longitude = state_info[key].lng.toString();
        var url = `https://api.weatherstack.com/forecast?access_key=` + apiKey + `&query=` + latitude + `,` + longitude;

        $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

                    console.log(data)
                    // TODO
                    // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
                    var temperature = data.current.temperature;
                    var weatherDesc = data.current.weather_descriptions[0];
                    var windSpeed = data.current.wind_speed;

                    //TODO
                    // Default color gray
                    // Create a series of if else blocks to set the color for the state based on the temperature
                    // Less than equal to 10F	#6495ED
                    // Between 11F and 20F	#7FFFD4
                    // Between 21F and 30F	#0000FF
                    // Between 31F and 40F	#008B8B
                    // Between 41F and 50F	#00BFFF
                    // Between 51F and 60F	#F08080
                    // Between 61F and 70F	#CD5C5C
                    // Between 71F and equal to 80F	#8B0000
                    // Between 81F and equal to 90F	#B22222
                    // Greater than 90F	#FF0000


                    $('#' + key).css('fill', getTempColor(getFarenheitTemp(temperature)));   // Example on how to fill colors for your state.

                    var toolTipTex = ` Temp today: ` + getFarenheitTemp(temperature) + `F<br> Weather: ` + weatherDesc + ` Wind Direction: ` + windSpeed;
                    var toolTip = document.getElementById(key).getElementsByTagName('title')[0].innerHTML += toolTipTex;
                    console.log("hello")

        });
    })
});
