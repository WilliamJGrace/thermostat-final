class Thermostat

    attr_reader :temperature, :power_saving_mode

    def initialize
        @temperature = 20
        @power_saving_mode = false
    end

    def update(temperature, power_saving_mode)
        @temperature = temperature
        @power_saving_mode = power_saving_mode
    end

    def self.instance
        @thermostat ||= self.new
    end
end


        

    