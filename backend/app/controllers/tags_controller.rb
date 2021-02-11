class TagsController < ApplicationController
  def index
    tags = Tag.all
    render json: TagSerializer.new(tags).to_serialized_json
  end
  
  def create
    tag = Tag.new(tag_params)
    if tag.save
      render json: TagSerializer.new(tag).to_serialized_json
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  private

  def tag_params
    params.require(:tag).permit(
      :id,
      :post_id,
      :name
    )
  end

end