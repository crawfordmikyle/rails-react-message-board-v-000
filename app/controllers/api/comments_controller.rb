require 'pry'
class Api::CommentsController < ApplicationController
  def create
    binding.pry
  end

  def destroy

  end

  private

  def comment_params

  end
end
