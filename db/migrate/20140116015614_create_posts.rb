class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :link_url
      t.string :body
      t.integer :author_id, null: false
      t.integer :subclon_id, null: false
      
      t.timestamps
    end
    
    add_index :posts, :title
    add_index :posts, :author_id
    add_index :posts, :subclon_id
  end
end
