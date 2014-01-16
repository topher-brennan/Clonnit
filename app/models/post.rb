class Post < ActiveRecord::Base
  attr_accessible :title, :link_url, :body, :author_id, :subclon_id
  
  belongs_to :subclon

end
