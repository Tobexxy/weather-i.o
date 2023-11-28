const apiKey = "7c0f01e5543d7065beb49e91ec9476e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const weatherIcon = document.querySelector('.weathericon');


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}&units=imperial`);
    var data = await response.json();
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + `<span>°C</span>`;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".wee").innerHTML = data.wind.speed + 'km';
    document.querySelector(".hum").innerHTML = data.main.humidity + '%';

  
    if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "img/thunderstorm.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "img/Big snow.png"
    }
    else if(data.weather[0].icon == "01d"){
        weatherIcon.src = "img/Sun1.png"
    }
    else if(data.weather[0].icon == "01n"){
        weatherIcon.src = "img/Moon.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/Cloud slow wind.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/Sun cloud little rain.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/shower rain.png"
    }
    else if(data.weather[0].description == "few clouds"){
        weatherIcon.src = "img/few clouds.png"
    }
    else if(data.weather[0].description == "scattered clouds"){
        weatherIcon.src = "img/Cloud1.png"
    }
    else if(data.weather[0].description == "broken clouds"){
        weatherIcon.src = "img/broken clouds.png"
    }
    else if(data.weather[0].description == "overcast clouds"){
        weatherIcon.src = "img/broken clouds.png"
    }
   
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value); //// This code checks goe the data in ajson format

})
