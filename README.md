# My Thermostat

A basic thermostat app. Initially written with JavaScript and some Jquery. I decided to create a ruby backend so that the user was able to revisit the page without the temperature being reset.

There is also a power-saving-mode that, when turned on, prevents the user setting the thermostat above 25.

I also used the OpenWeatherAPI so that the user can see the outside temperature when deciding to set their thermostat.

## How To Run

Clone the repo
```
cd thermostat-final
bundle install
ruby app.rb
```
Then visit localhost 4567 in your browser of choice

## User stories ##

1. Thermostat starts at 20 degrees
2. You can increase the temperature with an up function
3. You can decrease the temperature with a down function
4. The minimum temperature is 10 degrees
5. If power saving mode is on, the maximum temperature is 25 degrees
6. If power saving mode is off, the maximum temperature is 32 degrees
7. Power saving mode is on by default
8. You can reset the temperature to 20 with a reset function
9. You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.


(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
