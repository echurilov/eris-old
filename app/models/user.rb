class User < ApplicationRecord

  attr_reader :password
  after_initialize :ensure_session_token

  validates_presence_of :username, :password_digest, :session_token
  validates_uniqueness_of :username, :session_token
  validates_length_of :password, length: {minimum: 6}, allow_nil: true

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)

  end

  def is_password?(password)
  end

  def reset_session_token!
  end

  private

  def ensure_session_token
  end

  def generate_session_token
    token = SecureRandom::urlsafe_base64
  end
end
