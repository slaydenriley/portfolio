class PostCommentsController < ApplicationController
  def create
    @post_comment = PostComment.find_by_id(post_comment_params[:id])
  end

  def destroy
  end

end
