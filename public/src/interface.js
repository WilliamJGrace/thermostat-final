$(document).ready(function() {
  var thermostat = new Thermostat();
  $.get('/test',  // url
      function (data) {  // success callback
        thermostat.temperature = parseInt(data)
    });
  function updateTemperature(){
    $('#current-temperature').text(thermostat.temperature);
    $('#current-temperature').attr('class', thermostat.getCurrentUsage());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#outside-temperature').text(data.main.temp);
    });
    $.get(url + token + units, function(data) {
      $('#outside-weather').text(data.weather[0].main);
    });

  };






  // $('#outside-temperature').change(function(){
  displayWeather("London");

  $('#current-city').change(function() {
  var city = $('#current-city').val();
  displayWeather(city);
})




  updateTemperature();
  $('#temperature-up').click(function() {
    // $.ajax({
    //  type: 'get',
    //  url: '/test',
    //

    thermostat.up();
    updateTemperature();
  });
  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });
  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });
  $('#powersaving-on').click(function() {
    thermostat.switchOnPowerSaving();
    $('#power-saving-status').text("on");

  });
  $('#powersaving-off').click(function() {
    thermostat.switchOffPowerSaving();
    $('#power-saving-status').text("off");
  });
});
