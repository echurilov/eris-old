class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :username
    add_index :users, :email, unique: true
  end
end
