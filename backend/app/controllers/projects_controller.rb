class ProjectsController < ApplicationController
  def create
    project = Project.new(project_params)
    if project.save
      render json: ProjectSerializer.new(project).to_serialized_json
      session[:user_id] = project.id
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def show
    project = Project.find_by(id: params[:id])
    render json: ProjectSerializer.new(project).to_serialized_json
  end

  def index
    users = Project.all
    render json: ProjectSerializer.new(users).to_serialized_json
  end

  def edit
    project = Project.find_by(id: project_params[:id])
    project.update(project_params)
    if project.save
      render json: ProjectSerializer.new(project).to_serialized_json
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

  def project_params
    params.require(:project).permit(
      :name,
      :link,
      :description,
      :user_id
    )
  end

end
