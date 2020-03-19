$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#current-temperature').text(thermostat.temperature);

  $('#temperature-up').click(function() {
    thermostat.up();
    $('#current-temperature').text(thermostat.temperature);
  });
  $('#temperature-down').click(function() {
    thermostat.down();
    $('#current-temperature').text(thermostat.temperature);
  });
  $('#temperature-reset').click(function() {
    thermostat.reset();
    $('#current-temperature').text(thermostat.temperature);
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
