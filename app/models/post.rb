class Post < ActiveRecord::Base
  attr_accessible :title, :link_url, :body, :author_id, :subclon_id
  
  belongs_to :subclon

  belongs_to(
    :author,
    :class_name => "User",
    :foreign_key => :author_id,
    :primary_key => :id
  )

  has_many :comments

  def url
    return link_url unless link_url == ""
    "/posts/" + id.to_s
  end
end