function getWeather(){
	document.querySelector(".weather-info").style.display="block";
	const cityName = document.querySelector("input").value;

	$.ajax({
		url:`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=4b49b66c977879c9915a688302785b74&units=metric`,


   success:function(data){

console.log(data);
// const isNight;
// if (data.list[1].weather[0].main===rain) {
// console.log(document.querySelector("body").style.background-color="skyblue");


// }



document.querySelector(".city-name").innerHTML=data.city.name;
document.querySelector(".date").innerHTML=data.list[4].dt_txt;

document.querySelector(".temprature > span").innerHTML=data.list[0].main.temp;
document.querySelector(".discription").innerHTML=data.list[1].weather[0].main;
document.querySelector(".min").innerHTML=data.list[0].main.temp_min;
document.querySelector(".max").innerHTML=data.list[0].main.temp_max;
document.querySelector(".hum >span").innerHTML=data.list[0].main.humidity;






   },

	   error:function(error){
        console.log(error);
    }
})

}