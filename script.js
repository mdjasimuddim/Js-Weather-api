//8d9b7739fe9f3a730d5f85a7c7320c8d

let searchbox = document.getElementById('searchBox');
searchbox.addEventListener('input', function(){
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+searchbox.value+"&appid=8d9b7739fe9f3a730d5f85a7c7320c8d";
    fetch(url).then(response => response.json()).then(data => {
    var temp = document.getElementById('temp');
    var result = data.main.temp - 273.16;
    temp.innerHTML = result.toFixed(2);
    document.getElementById('speed').innerHTML = data.wind.speed;
    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('icon').src = "https://api.openweathermap.org/img/w/" + data.weather[0].icon +".png";
    // console.log(result.toFixed(2));
});
})

