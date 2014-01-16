class PostsController < ApplicationController
  def create
    params[:post][:author_id] = current_user.id
    params[:post][:subclon_id] = params[:subclon_id]
    
    @post = Post.new(params[:post])
    
    if @post.save
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      render :new
    end
  end
  
  def new
    @post = Post.new
    @subclon = Subclon.find(params[:subclon_id])
  end
  
  def show
    @post = Post.find(params[:id])
  end
end
