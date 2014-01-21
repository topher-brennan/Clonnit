json.(subclon, :id, :name, :creator_id)
json.posts subclon.posts do |json, post|
	json.partial!("posts/post", :post => post)
end
