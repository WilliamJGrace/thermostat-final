$(document).ready(function() {
  var thermostat = new Thermostat();
  function updateTemperature(){
    $('#current-temperature').text(thermostat.temperature);
    $('#current-temperature').attr('class', thermostat.getCurrentUsage());
  };




  updateTemperature();
  $('#temperature-up').click(function() {
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
