json.servers do
  json.joined do
    @servers.each do |server|
      json.set! server.id do
        json.extract! server, :id, :owner_id, :name
      end
    end
  end
end
