class PostsController < ApplicationController
  before_filter :user_owns_link?, only: [:edit, :update]

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
  
  def index
    @posts = Subclon.find(params[:subclon_id]).posts
    render :json => @posts
  end
  
  def show
    @post = Post.find(params[:id])
  end
  
  def edit
    @post = Post.find(params[:id])
  end
  
  def update
    if @post.update_attributes(params[:post])
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      render :edit
    end
  end
  
  def user_owns_link?
    redirect_to @post unless Post.find(params[:id]).author == current_user
  end
end
