class User < ApplicationRecord
  has_many :projects
  has_many :posts

  has_many :comments, through: :posts

  has_secure_password

end
