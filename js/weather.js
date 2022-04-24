const API_KEY = "a5a318675854cf4a92d7b74eb8022de9";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:last-child");
            const city = document.querySelector("#weather span:first-child");
            weather.innerText = `/ ${data.main.temp}°C`;
            city.innerText = data.name;
        }); //fetch는 promise, promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어난다.
}

function onGeoError(){
    alert("Can't find you. No weathe for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);