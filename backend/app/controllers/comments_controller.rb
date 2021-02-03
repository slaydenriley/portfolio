class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    if comment.save
      post = Post.find_by(id: comment.post_id)
      render json: PostSerializer.new(post).to_serialized_json
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    post = Post.find_by(id: comment.post_id)
    if comment.destroy
      render json: PostSerializer.new(post).to_serialized_json
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  private

  def comment_params
    params.require(:comment).permit(
      :id,
      :author_name,
      :author_email,
      :content,
      :post_id
    )
  end

end
