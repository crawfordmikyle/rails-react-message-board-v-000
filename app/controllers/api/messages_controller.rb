require 'pry'
class Api::MessagesController < ApplicationController

  def index
    messages = Message.all
    if messages
      render json: messages, status: 200
    else
      render json: {message: "there are no messages"}, status: 200
    end
  end

  def create
    user = User.find_or_create_by(:name => params[:user_name])
    message = user.messages.create(message_params)
    if message.save
      render json: message, status: 200
    else
      render json: {message: "woops something broke"}, status: 400
    end
  end

  def update
    set_message
    user = User.find_or_create_by(:name => params[:user_name])
    if @message.user_id == user.id && @message.update(message_params)
      render json: @message, status: 200
    else
      render json: {message: "woops something broke"}, status: 400
    end
  end

  def destroy
    set_message
    if @message.delete
      render json: {message: "message deleted"}, status: 200
    else
      render json: {message: "woops something broke"}, status: 400
    end
  end

private

  def message_params
    params.require(:message).permit(:title,:message_content)
  end

  def set_message
    @message = Message.find_by_id(params[:id])
  end

end
