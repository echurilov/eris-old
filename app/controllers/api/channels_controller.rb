class Api::ChannelsController < ApplicationController
  def index
    @channels = Server.find(params[:server_id]).channels
    render 'api/channels/index'
  end

  def show
    @channel.find(params[:id])
    if @channel
      render 'api/channels/show'
    else
      render json: @channel.errors.messages, status: 422
    end
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      Server.find(params[:server_id]).channels << @channel
      render 'api/channels/show'
    else
      render json: @channel.errors.messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @server = Server.find(params[:server_id])
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
    params.require(:channel).permit(:name, :server_id)
  end
end
