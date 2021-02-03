class CommentSerializer
  def initialize(comment)
    @comment = comment
  end

  def to_serialized_json
    options = {:only => [:id, :author_name, :author_email, :content, :post_id]}

    @comment.to_json(options)
  end

end
