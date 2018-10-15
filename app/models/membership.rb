# == Schema Information
#
# Table name: memberships
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  member_id  :integer          not null
#  server_id  :integer          not null
#
# Indexes
#
#  index_memberships_on_member_id  (member_id)
#  index_memberships_on_server_id  (server_id)
#

class Membership < ApplicationRecord
  belongs_to :member,
  class_name: :User,
  inverse_of: :memberships

  belongs_to :server,
  class_name: :Server,
  inverse_of: :members
end
