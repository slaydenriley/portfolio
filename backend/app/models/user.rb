class User < ApplicationRecord
  has_many :projects
  has_many :posts

  has_many :project_comments, through: :projects
  has_many :post_comments, through: :posts

  has_secure_password

end
