class CreateCommentVotes < ActiveRecord::Migration
  def change
    create_table :comment_votes do |t|
      t.integer :value, :null => false
      t.integer :comment_id, :null => false
      t.integer :user_id, :null => false

      t.timestamps
    end
    
    add_index :comment_votes, :comment_id
    add_index :comment_votes, :user_id
  end
end
