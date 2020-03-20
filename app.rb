require 'sinatra/base'
require 'pg'


class Thermostat < Sinatra::Base

 get '/' do
  erb :index
 end

 get '/test' do
   connection = PG.connect(dbname: 'thermostat')
   result = connection.exec("SELECT * FROM temperatures;")
   p result
   p result[0]['temperature']
   return result[0]['temperature']

 end


 run! if app_file == $0
end
