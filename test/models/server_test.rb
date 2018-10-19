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

require 'test_helper'

class ServerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
