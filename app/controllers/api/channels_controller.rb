class Api::ChannelsController < ApplicationController
  def index
    @server = Server.find(params[:server_id])
    @channels = @server.channels
    render 'api/channels/index'
  end

  def show
    @server = Server.find(params[:server_id])
    @channel.find(params[:id])
    if @channel
      render 'api/channels/show'
    else
      render json: @channel.errors.messages, status: 422
    end
  end

  def create
    @server = Server.find(params[:server_id])
    @channel = Channel.new(channel_params)
    if @channel.save
      @server.channels << @channel
      render 'api/channels/show'
    else
      render json: @channel.errors.messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:server_id])
    @channel = Channel.find(params[:id])
    if @server.owner_id == @user.id
      if @channel.destroy
        render 'api/servers/show'
      else
        render json: {'channel': ['Channel does not exist to be deleted']}
      end
    else
      render json: {'channel': ['You do not have permissions to delete this channel']}
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:id, :name, :server_id)
  end
end
