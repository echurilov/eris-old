class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new
    @membership.member_id = current_user.id
    @membership.server_id = params[:id]
    if @membership.save
      render 'api/memberships/show'
    else
      render json: @server.errors.messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find(params[:id])
    if @membership.destroy
      render 'api/memberships/show'
    else
      render json: {'server': ['Cannot leave a server you are not a member of']}
    end
  end
end
