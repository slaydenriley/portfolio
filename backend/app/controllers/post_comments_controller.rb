class PostCommentsController < ApplicationController
  def create
    post_comment = PostComment.new(post_comment_params)
    if post_comment.save
      render json: CommentSerializer.new(post_comment).to_serialized_json
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def destroy
  end

  private

  def post_comment_params
    params.require(:post_comment).permit(
      :author_name,
      :author_email,
      :content,
      :post_id
    )
  end

end
