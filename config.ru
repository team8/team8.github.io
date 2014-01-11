#require './app'

#run Sinatra::Application

require "rack/jekyll"

run Rack::Jekyll.new