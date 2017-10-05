class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :message_id
      t.string :comment_content
      t.timestamps
    end
  end
end