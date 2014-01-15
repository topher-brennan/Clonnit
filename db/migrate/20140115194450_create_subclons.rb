class CreateSubclons < ActiveRecord::Migration
  def change
    create_table :subclons do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end

    add_index :subclons, :name
    add_index :subclons, :creator_id
  end
end
