'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMPERATURE = 20
  this.MAX_LIMIT_PSM_ON = 20;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
}


Thermostat.prototype.getCurrentTemperature = function(callback) {
  $.get('/temperature', function(data) {
    var roomTemp = JSON.parse(data)
    callback(roomTemp)
  })
}

Thermostat.prototype.up = function(currentTemperature, callback) {
  // if (this.isMaximumTemperature()) {
  //     return;
  //   };
  // this.temperature += 1;
  console.log("IM BEING CALLED ")
  this._updateTemp(currentTemperature + 1, callback)

};

Thermostat.prototype.down = function(currentTemperature, callback) {
  // if (this.isMinimumTemperature()) {
  //  return;
  // }
  console.log("pressed down")
  this._updateTemp(currentTemperature - 1, callback)
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchOffPowerSaving = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchOnPowerSaving = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false){
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE

};

Thermostat.prototype.getCurrentUsage = function () {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return "low-usage";
  };
  if (this.temperature < this.MAX_LIMIT_PSM_ON && this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT){
    return "medium-usage";
  };
  return "high-usage"

};

Thermostat.prototype._updateTemp = function(value, callback) {
  $.post('/temperature', { temperature: value }, callback)
  console.log(value)
    
}
