;(function() {
  var req = new XMLHttpRequest();
  var cityTemp = document.querySelector('.city__temp');
  var cityName = document.querySelector('.city__nameInput');
  var cityWeather = document.querySelector('.city__weather');
  var city = document.querySelector('.city');
  var main = document.querySelector('main');

  function kelvinToF(temp) {
    return Math.round(temp * 9 / 5 - 459.67);
  };

  function loadForcast() {
    city.classList.toggle('is-transparent');

    req.open('GET',
      'http://api.openweathermap.org/data/2.5/weather?q=' + cityName.value +
      ',us&appid=bd82977b86bf27fb59a04b61b657fb6f');
    req.onload = function(res) {
      var data = JSON.parse(res.target.response);

      cityName.value = data.name;
      cityTemp.innerHTML = kelvinToF(data.main.temp);
      cityWeather.innerHTML = data.weather[0].description;

      main.style.opacity = 1;
      city.classList.toggle('is-transparent');
    };

    req.send();
  }

  cityName.addEventListener('change', loadForcast);

  loadForcast();
})();
