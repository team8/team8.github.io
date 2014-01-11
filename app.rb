require 'sinatra'

set :public_folder, Proc.new { File.join(root, "_site") }

configure do
  `jekyll build`
end

before do
  response.headers['Cache-Control'] = 'public, max-age=31557600' # 1 year
end

get '/' do
  File.read('_site/index.html')
end

post '/' do
  File.read('_site/index.html')
end
