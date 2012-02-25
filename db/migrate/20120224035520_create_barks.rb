class CreateBarks < ActiveRecord::Migration
  def self.up
    create_table :barks do |t|
      t.string :barkee
      t.string :category
      t.string :content
      t.integer :user_id

      t.timestamps
    end
	add_index :barks, [:user_id, :created_at]
  end

  def self.down
    drop_table :barks
  end
end
