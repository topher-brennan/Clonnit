class CommentsController < ApplicationController
  def create
    params[:comment][:author_id] = current_user.id
    params[:comment][:post_id] = params[:post_id]
    
    @comment = Comment.new(params[:comment])
    
    if @comment.save
      redirect_to post_url(@comment.post)
    else
      flash[:errors] = @comment.errors.full_messages
      render :new
    end
  end
  
  def new
    @comment = Comment.new
  end
end
