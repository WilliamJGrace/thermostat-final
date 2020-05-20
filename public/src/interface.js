$(document).ready(function() {
  var thermostat = new Thermostat();
  function updateTemperature(){
    thermostat.getCurrentTemperature(function(data) {
      $('#current-temperature').text(data.temperature);
      $('#current-temperature').attr('class', thermostat.getCurrentUsage());
    })
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#outside-temperature').text(data.main.temp);
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
    var currentTemperature = parseInt($('#current-temperature').text())
    console.log(currentTemperature)

    thermostat.up(currentTemperature, updateTemperature);
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
