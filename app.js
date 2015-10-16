;(function() {
  // Your code goes here!
  // bbf8a4ddaff87d904ad4124da0725dee
  var req = new XMLHttpRequest();
  var cityTemp = document.querySelector('.city__temp');
  var cityWeather = document.querySelector('.city__weather');
  var cityInput = document.querySelector('.city__nameInput');

  function loadForcast() {
    req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + ',us&appid=bd82977b86bf27fb59a04b61b657fb6f');
    req.onload = function(res) {
      var data = JSON.parse(res.target.response);

      cityTemp.innerHTML = Math.round(data.main.temp * 9 / 5 - 459.67);
      cityWeather.innerHTML = data.weather[0].description;
    };

    req.send();
  }

  cityInput.addEventListener('change', loadForcast);

  loadForcast();
})();
