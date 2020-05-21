class Thermostat

    attr_reader :temperature

    def initialize
        @temperature = 20
    end

    def update(temperature)
        @temperature = temperature
    end

    def self.instance
        @thermostat ||= self.new
    end
end


        

    