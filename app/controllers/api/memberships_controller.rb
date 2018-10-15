class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new
    @membership.member_id = current_user.id
    @member_id.server_id = params[:server_id]
    if @membership.save
      render 'api/servers/show'
    else
      render json: @server.errors.messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find(params[:id])
    if @membership.destroy
      render 'api/users/show'
    else
      render json: {'server': ['Cannot leave a server you are not a member of']}
    end
  end
  
end
