class Api::ServersController < ApplicationController
  def index
    # owned = Server.where(owner_id: current_user.id)
    # joined = current_user.servers
    @servers = current_user.servers
    render 'api/servers/index'
  end

  def show
    @server.find(params[:id])
    if @server
      render 'api/servers/show'
    else
      render json: @server.errors.messages, status: 422
    end
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      current_user.servers << @server
      render 'api/servers/show'
    else
      render json: @server.errors.messages, status: 422
    end
  end

  def destroy
    @server.find(params[:id])
    if @server.destroy
      render 'api/users/show'
    else
      render json: {'server': ['Server does not exist to be deleted']}
    end
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end

end
