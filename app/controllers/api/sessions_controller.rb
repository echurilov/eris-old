class Api::SessionsController < ApplicationController
  def create
    email = params[:user][:email]
    password = params[:user][:password]
    errors = {}
    @user = User.find_by_credentials(email, password)

    if password == ""
      errors['password'] = ["This field is required"]
    end

    if email == ""
      errors['email'] = ["This field is required"]
    end

    unless password.length >= 6 && password.length <= 128
      errors['password'] = ["Must be between 6 and 128 in length"]
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
