class UpdateServers < ActiveRecord::Migration[5.2]
  def change
    remove_index :servers, :owner_id
    add_index :servers, :owner_id
    change_column :servers, :owner_id, :integer, null: false, unique: true
  end
end
