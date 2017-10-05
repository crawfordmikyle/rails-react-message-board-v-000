require 'pry'
class Api::CommentsController < ApplicationController
  def show
    message = Message.find_by_id(params[:message_id])
    if message
      render json: message.comments, status: 200
    else
      render json: {message: "can't find that message"}, status: 404
    end
  end

  def create
    message = Message.find_by_id(params[:message_id])

    if message.comments.create({comment_content: params[:comment_content]})
      render json: message.comments, status: 200
    else
      render json: {message: "oops something is wrong"}, status: 400
    end

  end

  def destroy
    message = Message.find_by_id(params[:message_id])

    if message && comment = message.comments.find_by(id: params[:comment_id])
      comment.delete
      render json: {message: "comment deleted"}, status: 200
    else
      render json: {message: "woops"}, status: 400
    end
  end

end
