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

  has_many :post_votes

  def url
    return link_url unless link_url == ""
    "/posts/" + id.to_s
  end
  
  def total_votes
    total = 0
    self.post_votes.each do |vote|
      total += vote.value
    end
    total
  end
end