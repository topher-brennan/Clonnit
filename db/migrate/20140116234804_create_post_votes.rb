class CreatePostVotes < ActiveRecord::Migration
  def change
    create_table :post_votes do |t|
      t.integer :value, :null => false
      t.integer :post_id, :null => false
      t.integer :user_id, :null => false

      t.timestamps
    end
    
    add_index :post_votes, :post_id
    add_index :post_votes, :user_id
  end
end
