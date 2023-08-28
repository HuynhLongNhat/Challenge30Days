var searchInput = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var temperature = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility div');
var wind = document.querySelector('.wind div');
var sun = document.querySelector('.sun div');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changWeatherUI(searchValue) {
   
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=64f8d7c7b55b1133656453ee34b01681`; 
    
   
     let response = await fetch(apiUrl);
     let data = await response.json();
     if(data.cod == 200) {
           console.log(data);
            content.classList.remove('hide');
            city.innerText = data.name;
            let countryCode = data.sys.country;
            country.innerText = countryCode ;
            time.innerText = new Date().toLocaleString('vi');
           
            let temp = Math.round((data.main.temp - 273.15)) ;
            temperature.innerHTML = temp +" <sup>o</sup>C";
            shortDesc.innerText = data.weather[0].main;
            visibility.innerText = data.visibility + "m";
            wind.innerText = data.wind.speed + "m/s";
            sun.innerText = data.main.humidity + "%";
             

            body.setAttribute('class' , 'hot');
            if(temp >= 25 && temp <= 30)
             {
                  body.setAttribute('class' , 'warm');
             }
             else  if(temp > 15 && temp < 25)
             {
                  body.setAttribute('class' , 'cold');
             }
             else
             {
                  body.setAttribute('class' , 'cool');
             }
             
     }
     else {
       content.classList.add('hide');
     }
    
}


searchInput.addEventListener('keypress' , function(e) {
     if(e.code === 'Enter') {
        let searchValue =  searchInput.value.trim();
         changWeatherUI(searchValue)
     }
} )

changWeatherUI('Ha Noi');