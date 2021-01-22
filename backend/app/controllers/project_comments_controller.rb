class ProjectCommentsController < ApplicationController
  def create
    project_comment = ProjectComment.new(project_comments_params)
    if project_comment.save
      render json: ProjectCommentsSerializer.new(project_comment).to_serialized_json
      session[:user_id] = project_comment.id
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def show
    project_comment = ProjectComment.find_by(id: params[:id])
    render json: ProjectCommentsSerializer.new(project_comment).to_serialized_json
  end

  def index
    users = ProjectComment.all
    render json: ProjectCommentsSerializer.new(users).to_serialized_json
  end

  def edit
    project_comment = ProjectComment.find_by(id: project_comments_params[:id])
    project_comment.update(project_comments_params)
    if project_comment.save
      render json: ProjectCommentsSerializer.new(project_comment).to_serialized_json
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

  def project_comments_params
    params.require(:project_comment).permit(
      :name,
      :link,
      :description,
      :user_id
    )
  end

end
