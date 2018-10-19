# == Schema Information
#
# Table name: servers
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          not null
#  user_id    :integer
#
# Indexes
#
#  index_servers_on_owner_id  (owner_id)
#  index_servers_on_user_id   (user_id) UNIQUE
#

class Server < ApplicationRecord
  validates_presence_of :name, :owner_id
  validates_uniqueness_of :user_id, allow_nil: true

  belongs_to :owner,
  class_name: :User,
  inverse_of: :owned_servers

  has_many :memberships
  has_many :members,
  through: :memberships,
  inverse_of: :servers,
  dependent: :destroy

  has_many :channels,
  inverse_of: :server

  belongs_to :user,
  optional: true,
  inverse_of: :home
end
