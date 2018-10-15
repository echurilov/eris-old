class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :member_id, null: false
      t.integer :server_id, null: false
      t.timestamps
    end
    add_index :memberships, :member_id
    add_index :memberships, :server_id
  end
end
