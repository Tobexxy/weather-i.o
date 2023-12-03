const apiKey = "7c0f01e5543d7065beb49e91ec9476e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search-box input');
const container = document.querySelector('.container');
const searchBtn = document.querySelector('.search-box button');
const weatherIcon = document.querySelector('.weathericon');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const enter = document.getElementById("Enter");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}&units=imperial`);
    const statusCode = response.status;// this code is used to get the website status code
    // console.log(statusCode)

    if(statusCode == '404'){
        container.style.height = "400px";
        error404.classList.add('active');
        weatherBox.classList.remove('active');
        weatherDetails.classList.remove('active');
        return;

    }

    container.style.height = "555px";   
    weatherBox.classList.add('active');      
    weatherDetails.classList.add('active');   
    error404.classList.remove('active');

    



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
    else if(data.weather[0].icon == "02n"){
        weatherIcon.src = "img/Moon cloud.png"
    }
    else if(data.weather[0].icon == "50d"){
        weatherIcon.src = "img/Cloud slow wind.png"
    }
    else if(data.weather[0].icon == "50n"){
        weatherIcon.src = "img/Cloud slow wind.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/Cloud little rain.png"
    }
    else if(data.weather[0].icon == "10d"){
        weatherIcon.src = "img/Sun cloud angled rain.png"
    }
    else if(data.weather[0].icon == "10n"){
        weatherIcon.src = "img/Moon cloud angled rain.png"
    }
    else if(data.weather[0].icon == "02d"){
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
    checkWeather(searchBox.value); //// This code checks goe the data in ajson format . this make the click buton initiate search
})

enter.addEventListener('keyup', (e) => {// this code makes it possible for the enter button to initiate search
    if (e.keyCode === 13) {
        checkWeather(searchBox.value);
        
        
    }
});