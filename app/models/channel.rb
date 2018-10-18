# == Schema Information
#
# Table name: channels
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  server_id  :integer          not null
#
# Indexes
#
#  index_channels_on_server_id  (server_id)
#

class Channel < ApplicationRecord

  validates_presence_of :name, :server_id

  belongs_to :server,
  inverse_of: :channels

end
