class AddUserIdToServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :user_id, :integer
    add_index :servers, :user_id, unique: true
  end
end
