class Comment < ActiveRecord::Base
  attr_accessible :body, :author_id, :post_id, :parent_id
  
  validates :body, :presence => :true
  
  belongs_to(
    :parent,
    :class_name => "Comment",
    :foreign_key => :parent_id,
    :primary_key => :id
  )
  
  has_many(
    :children,
    :class_name => "Comment",
    :foreign_key => :parent_id,
    :primary_key => :id
  )
  
  belongs_to(
    :author,
    :class_name => "User",
    :foreign_key => :author_id,
    :primary_key => :id
  )
  
  belongs_to :post
end
