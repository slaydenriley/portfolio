class PostSerializer
  def initialize(post_object)
    @post = post_object
  end

  def to_serialized_json
    options = {
      :only => [
        :id, :title, :content, :user_id, :category, :image_link, :created_at, :tag],
      include:
        [:tags, comments: {
          :only => [:id, :content, :created_at, :updated_at, :post_id, :user_id],
        include: [:user]}]
    }

    @post.to_json(options)
  end

  def to_small_json
    options = {
      :only => [
        :id, :title, :created_at, :updated_at, :category, :image_link, :tag],
      include: :tags
    }
    @post.to_json(options)
  end

end
