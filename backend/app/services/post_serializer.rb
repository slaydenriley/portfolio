class PostSerializer
  def initialize(post_object)
    @post = post_object
  end

  def to_serialized_json
    options = {
      :only => [
        :id, :title, :content, :user_id, :category],
      include:
        [comments: {:only => [:id, :author_name, :author_email, :content, :created_at, :post_id]}]
    }

    @post.to_json(options)
  end

  def to_small_json
    options = {
      :only => [
        :id, :title, :created_at, :updated_at, :category]
    }
    @post.to_json(options)
  end

end
