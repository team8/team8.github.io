require 'sinatra'

set :public_folder, Proc.new { File.join(root, "_site") }

before do
  response.headers['Cache-Control'] = 'no-cache' # 1 year
end

get '/*' do
  file_name = "_site#{request.path_info}/index.html".gsub(%r{\/+},'/')
  if File.exists?(file_name)
    File.read(file_name)
  else
    File.read('_site/404.html')
    #raise Sinatra::NotFound
  end
end
