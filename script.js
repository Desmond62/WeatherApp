


// const getweatherapi = () =>{
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=dbacb570e7d9cad6cfad91cc9e45b764")
//       .then((res) => res.json())
//      .then((data)=>{
//       console.log(data)
//       let ima = data.weather[0].main == "Clouds" ? 0 : data.weather[0].main == "sunny" ? 1 : data.weather[0].main == "Rain" ? 2 : 3
//       console.log(ima)
//       document.getElementById("img").src=`./image/${img[ima]}`
//      })
//   };
//   getweatherapi();

//   const img = [ "remove 3.png","rain2.png", "rain3.png",]
  

const apiKey = "dbacb570e7d9cad6cfad91cc9e45b764";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".des input");
const searchBtn =document.querySelector(".des button");
const weatherImg = document.querySelector(".weather-img");
const weatherBg = document.querySelector(".bg-weather");

async function checkWeather(city){
    let res = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await res.json();

    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "ºc";
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = Math.round(data.wind.speed ) + "km/h";

if(data.weather[0].main == "Clouds"){
    weatherImg.src = "image/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weatherImg.src = "image/sunny.png";
}
else if(data.weather[0].main == "Rain"){
    weatherImg.src = "image/rain.png";
}else if(data.weather[0].main == "Drizzle"){
    weatherImg.src = "image/drizzle.png";
}else if(data.weather[0].main == "Mist"){
    weatherImg.src = "image/cloud.png";
}



if(data.weather[0].main == "Clouds"){
    weatherBg.style.backgroundImage= 'url("image/moody sky.jpg")';
  }
  else if(data.weather[0].main == "Clear"){
    weatherBg.style.backgroundImage= 'url("image/clear sky2.jpg")';
  }
  else if(data.weather[0].main == "Rain"){
    weatherBg.style.backgroundImage= 'url("image/rainny sky.jpg")';
  }
 
document.querySelector(".max").style.height="420px";
document.querySelector(".whole").style.display="block";
  
}


searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);

})



// function ok(){
// const windowHeight =window.innerHeight;
// if(windowHeight < 450){
// document.$max.style.height = '330px';
// }else{
//     document.max.style.height = '300px';
 
// }
// }ok();

// if(res.status == 404){
//     document.querySelector(".error").style.display="block"; 
// }






// if(data.weather[0].main == "Clouds"){
//     weatherBg.src = "image/cloud sky.jpg";
  
//   }
//   else if(data.weather[0].main == "Clear"){
//       weatherBg.src = "image/clear sky.jpg";
//   }
//   else if(data.weather[0].main == "Rain"){
//       weatherBg.src = "image/rainny sky.jpg";
//   }
// const weatherBg = document.querySelector("bg-weather");





// const url = "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=dbacb570e7d9cad6cfad91cc9e45b764&units=metric"
// const btn = document.getElementById("search");
// const show = document.getElementById("result");

// btn.addEventListener("click", () => {
// let arrDes = document.getElementById("inp").value;
// fetch(`${url}`)
// .then((res) => res.json())
// .then((data) => {
// console.log(data);

// document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "ºc";
// document.querySelector(".city").innerHTML = data.name;
// document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
// document.querySelector(".wind").innerHTML = Math.round(data.wind.speed ) + "km/h";



// });
// });

  

  

 
