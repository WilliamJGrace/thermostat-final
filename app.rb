require 'sinatra/base'

class ThermostatApp < Sinatra::Base

    get '/' do
        "hi"
    end

    run! if app_file == $0
end