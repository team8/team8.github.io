# build jekyll site
`jekyll build`

puts "jekyll built"

# run application
require './app'
run Sinatra::Application
