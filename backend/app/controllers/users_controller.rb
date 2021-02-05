class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      payload = {
        user: UserSerializer.new(user).to_serialized_json,
        logged_in: true
      }
      render :json => payload
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def show
    user = User.find_by(id: params[:id])
    render json: UserSerializer.new(user).to_serialized_json
  end

  def index
    users = User.all
    render json: UserSerializer.new(users).to_serialized_json
  end

  def edit
    user = User.find_by(id: user_params[:id])
    user.update(user_params)
    if user.save
      render json: UserSerializer.new(user).to_serialized_json
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

  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :description,
      :password,
      :password_confirmation
    )
  end
end
