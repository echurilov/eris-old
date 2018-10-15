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

require 'test_helper'

class MembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
