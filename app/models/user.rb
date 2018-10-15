# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#

class User < ApplicationRecord

  after_initialize :ensure_session_token

  attr_reader :password

  validates_presence_of :username, :email, :password, :password_digest, :session_token, message: "This field is required"
  validates_uniqueness_of :email, message: "Email is already registered"
  validates_uniqueness_of :session_token
  validates_length_of :password, minimum: 6, maximum: 128, allow_nil: true, message: "Must be between 6 and 128 in length"

  has_many :owned_servers,
  class_name: :Server,
  inverse_of: :owner

  has_many :memberships
  has_many :servers,
  through: :memberships,
  inverse_of: :member

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    self.session_token = SecureRandom::urlsafe_base64
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom::urlsafe_base64
    end
    self.session_token
  end
end
