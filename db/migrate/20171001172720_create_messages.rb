class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :title
      t.text :message_content
      t.integer :user_id
      t.integer :likes, :default => 0
      t.timestamps
    end
  end
end
