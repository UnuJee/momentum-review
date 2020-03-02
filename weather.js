const API_KEY = "3be26c337d2399ec96ccbce2075fafb6";
const weather = document.querySelector(".js-weather-title");
const LOCATION_LS = "location-local-storage";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      weather.innerText = `${json.main.temp}˚C @ ${json.name}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(LOCATION_LS, JSON.stringify(coordsObj));
}

function getCoords() {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function handleSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const coordsObj = {
    lat,
    lon
  };
  saveCoords(coordsObj);
  getWeather(lat, lon);
}
function handleError() {
  alert("위치 정보를 알 수 없습니다.");
  weather.innerText = `위치 정보 권한을 허용해주세요.`;
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(LOCATION_LS);
  if (loadedCoords === null) {
    getCoords();
  } else {
    const parsedLoadedCoords = JSON.parse(loadedCoords);
    getWeather(parsedLoadedCoords.lat, parsedLoadedCoords.lon);
  }
}

function init() {
  loadCoords();
}

init();
