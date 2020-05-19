'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature with up function', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases temperature with down function', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('sets minimum temperature at 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });


  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchOffPowerSaving();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.switchOffPowerSaving();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchOnPowerSaving();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });


  it('if power saving mode is on, maximum temperature is 25 degrees', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });
  it('if power saving mode is off, maximum temperature is 32 degrees', function() {
    thermostat.switchOffPowerSaving();    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });
  it('can return temperature back to 20', function(){
    thermostat.up()
    thermostat.reset()
    expect(thermostat.getCurrentTemperature()).toEqual(20);


  });
  it('gives us low-energy usage when below < 18 degrees', function(){
    for(var i=0;i<7;i++){
      thermostat.down();
    }
    expect(thermostat.getCurrentUsage()).toEqual("low-usage")

  });

  it('gives us medium-energy usage when between 18 and 25 degrees', function(){
    for(var i=0;i<3;i++){
      thermostat.up();
    }
    expect(thermostat.getCurrentUsage()).toEqual("medium-usage")

  });

  it('gives us high-energy usage when over 25', function(){
    this.powerSavingMode = false
    for(var i=0;i<7;i++){
      thermostat.up();
    }
    expect(thermostat.getCurrentUsage()).toEqual("high-usage")

  });

});


// 5. If power saving mode is on, the maximum temperature is 25 degrees
