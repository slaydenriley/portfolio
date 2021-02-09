class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  def created_at
    time = attributes['created_at']
    time.strftime('%A, %B %u')
  end
end
