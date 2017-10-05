class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :comment_content
      t.integer :message_id
      t.timestamps
    end
  end
end
