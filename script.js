function getWeather(){
	document.querySelector(".weather-info").style.display="block";
	const cityName = document.querySelector("input").value;

	$.ajax({
		url:`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=4b49b66c977879c9915a688302785b74&units=metric`,


   success:function(data){

console.log(data);
document.querySelector(".city-name").innerHTML=data.city.name;
document.querySelector(".date").innerHTML=data.list[0].dt_txt;

document.querySelector(".temprature > span").innerHTML=data.list[0].main.temp;
document.querySelector(".discription").innerHTML=data.list[0].weather[0].main;
document.querySelector(".min").innerHTML=data.list[0].main.temp_min;
document.querySelector(".max").innerHTML=data.list[0].main.temp_max;
document.querySelector(".hum >span").innerHTML=data.list[0].main.humidity;

		let iconName = data.list[0].weather[0].main;
			if (iconName === `Clouds`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-cloud"></i>`;
				document.body.style.backgroundImage = "url('http://4.bp.blogspot.com/-1BmzmaRJ-_c/UVfQLT66iqI/AAAAAAAACaE/uJbILiIvMx0/s1600/sky+cloud+wallpapers+hd+(3).png')";

			} else if (iconName === `Rain`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-rain"></i>`;
				document.body.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/D8qa-2E/rainy-stormy-darkness-wet-weather-background-depressed-sad-background_bzxjr4x7h__F0000.png')";
			}else if (iconName === `Snow`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-snow"></i>`;
				document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/r6VkCdQQdG0/maxresdefault.jpg')";
				document.body.style.color="white";
			} else if (iconName === `Sunny`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
				document.body.style.backgroundImage = "url('http://images6.fanpop.com/image/photos/36600000/Sun-star-image-sun-star-36682661-1920-1080.jpg')";
			} else if (iconName === `Haze`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
				document.body.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/nz06K7R/dark-scary-lake-at-night-background-loop-raw-1-white-haze-floating-over-the-still-lake-surrounded-by-a-creepy-forest-seamless-looping-perfect-for-backgrounds-backdrops-intro-outro-or-credits-for-themes-like-halloween-apocalypse_v1-sfrwh__F0000.png')";

			} else if (iconName === `Clear`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
				document.body.style.backgroundImage = "url('https://jooinn.com/images/blue-sky-99.jpg')";

			}
			else {
				document.querySelector(".icon").innerHTML = `Loading icon.....`;
			}

	   error:function(error){
        console.log(error);
    }
})

}
