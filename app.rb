require 'sinatra/base'


class Thermostat < Sinatra::Base

 get '/' do
  erb :index
 end

 get '/test' do
   "Test"
 end


 run! if app_file == $0
end
