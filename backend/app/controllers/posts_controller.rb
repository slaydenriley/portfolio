class PostsController < ApplicationController
  def create
    post = Post.new(post_params)
    if post.save
      render json: PostSerializer.new(post).to_serialized_json
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def show
    post = Post.find_by(id: params[:id])
    render json: PostSerializer.new(post).to_serialized_json
  end

  def index
    posts = Post.all
    render json: PostSerializer.new(posts).to_small_json
  end

  def update
    post = Post.find_by(id: post_params[:id])
    post.update(post_params)
    if post.save
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
    post = Post.find_by(id: post_params[:id])
      if post.destroy
        posts = Post.all
        render json: PostSerializer.new(posts).to_serialized_json
      else
        payload = {
          error: "Something went wrong. Please try again.",
          status: 400
        }
        render :json => payload, :status => :bad_request
      end
  end

  private

  def post_params
    params.require(:post).permit(
      :title,
      :content,
      :user_id,
      :category,
      :id,
      :image_link,
      :tag
    )
  end

end
