json.(todo, :id, :name, :creator_id)

posts ||= nil
unless posts.nil?
  json.posts(posts) do |post|
    json.partial!("posts/post", :post => post)
  end
end