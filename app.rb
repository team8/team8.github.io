require 'sinatra'

set :public_folder, Proc.new { File.join(root, "_site") }

before do
  response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate" # HTTP 1.1.
  response.headers["Pragma"] = "no-cache" # HTTP 1.0.
  response.headers["Expires"] = "0" # Proxies.
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
