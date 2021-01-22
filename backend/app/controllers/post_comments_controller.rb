class PostCommentsController < ApplicationController
  def create
    post_comment = PostComment.new(post_comments_params)
    if post_comment.save
      render json: PostCommentsSerializer.new(post_comment).to_serialized_json
      session[:user_id] = post_comment.id
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def show
    post_comment = PostComment.find_by(id: params[:id])
    render json: PostCommentsSerializer.new(post_comment).to_serialized_json
  end

  def index
    users = PostComment.all
    render json: PostCommentsSerializer.new(users).to_serialized_json
  end

  def edit
    post_comment = PostComment.find_by(id: post_comments_params[:id])
    post_comment.update(post_comments_params)
    if post_comment.save
      render json: PostCommentsSerializer.new(post_comment).to_serialized_json
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

  def post_comments_params
    params.require(:post_comment).permit(
      :author_name,
      :author_email,
      :content,
      :post_id
    )
  end

end
