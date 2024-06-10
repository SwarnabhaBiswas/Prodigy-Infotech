const apiKey="bc1f50fd60fa0a6c33e1f78e4bb03a85";
const api=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;


let place=document.querySelector('.city');
const button=document.querySelector('.search button');
let img=document.querySelector('.icon img');


button.addEventListener("click",()=>{
    if(place.value==""){
        alert("Enter something");
    }
    else{
        getWeather(place.value);
    }
})


async function getWeather(place){
    const response= await fetch(api+place+`&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.place').innerHTML=`${data.name}`;
    document.querySelector(".temp").innerHTML=`${Math.round(data.main.temp)}&degC`;
    document.querySelector('.humidity').innerHTML=`${data.main.humidity}&nbsp%`;
    document.querySelector('.wind').innerHTML=`${Math.round(data.wind.speed)}&nbspKm/h`;
    

    if(data.weather[0].main=="Clouds"){
        img.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
            img.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
            img.src="images/rain.png";
            
    }
    else if(data.weather[0].main=="Drizzle"){
            img.src="images/drizzle.png";
    }
    else{
            img.src="images/mist.png";
    }
    
    document.querySelector(".content").style.display="flex";

}

