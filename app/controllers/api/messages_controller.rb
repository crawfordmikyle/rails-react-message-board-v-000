class Api::MessagesController < ApplicationController
  def index
    messages = Message.all
    if messages
      render json: messages, status: 200
    else
      render json: {message: "there are no messages"}
    end
  end
end
