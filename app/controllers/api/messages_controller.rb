class Api::MessagesController < ApplicationController

  def index
    messages = Message.all
    if messages
      render json: messages, status: 200
    else
      render json: {message: "there are no messages"}
    end
  end

  def create

  end

  def update

  end

  def destroy

  end

private

  def message_params
    params.require(:message).permit(title:,message_content:)
  end

  def set_message
    @message = Message.find_by_id(params[:id])
  end

end
