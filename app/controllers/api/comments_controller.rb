class Api::CommentsController < ApplicationController
  def create
    params[:comment][:author_id] = current_user.id
    params[:comment][:post_id] = params[:post_id]
    
    @comment = Comment.new(params[:comment])
    
    if @comment.save
      render :json => @comment
    else
      render :json
    end
  end
  
  def new
    @comment = Comment.new
  end
end
