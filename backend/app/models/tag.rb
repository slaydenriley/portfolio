class Tag < ApplicationRecord
  belongs_to :post

  def created_at
    time = attributes['created_at']
    time.strftime('%A, %B %u')
  end
end
