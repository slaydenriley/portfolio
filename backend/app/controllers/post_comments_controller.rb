class PostCommentsController < ApplicationController
  def create
    post_comment = PostComment.new(post_comment_params)
    if post_comment.save
      post = Post.find_by(id: post_comment.post_id)
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
    post_comment = PostComment.find_by(id: params[:id])
    post = Post.find_by(id: post_comment.post_id)
    if post_comment.destroy
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

  def post_comment_params
    params.require(:post_comment).permit(
      :id,
      :author_name,
      :author_email,
      :content,
      :post_id
    )
  end

end
