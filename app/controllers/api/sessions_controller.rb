class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    errors = {}

    if params[:user][:password] == ""
      errors['password'] = ["This field is required"]
    end

    if params[:user][:email] == ""
      errors['email'] = ["This field is required"]
    end

    if @user
      login!(@user)
      render 'api/users/show'
    else
      errors['password'] += ["Password does not match"]
      render json: errors, status: 422
    end

  end

  def destroy
    @user = current_user
    if @user
      logout!
    else
      render json: {'email': ["No user signed in to log out"]}, status: 404
    end
  end
end
