class PostSerializer
  def initialize(post_object)
    @post = post_object
  end

  def to_serialized_json

    options = {
      :only => [
        :id, :title, :content, :user_id],
      include:
        [post_comments: {:only => [:author_name, :author_email, :content, :created_at]}]
    }

    @post.to_json(options)

  end
end
