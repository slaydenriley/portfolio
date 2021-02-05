class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

  def created_at
    attributes['created_at'].strftime('%b %e, %l:%M %p')
  end
end
