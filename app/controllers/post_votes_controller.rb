class PostVotesController < ApplicationController
  def create
    params[:post_vote][:user_id] = current_user.id
    params[:post_vote][:post_id] = params[:post_id]
    
    @post_vote = PostVote.new(params[:post_vote])
    
    @post_vote.save
    
    redirect_to post_url(@post_vote.post)
  end
  
  def new
    @post_vote = PostVote.new
  end
  
  def edit
  end
  
  def update
    params[:post_vote][:user_id] = current_user.id
    params[:post_vote][:post_id] = params[:post_id]
    
    current_post_vote.update_attributes!(params[:post_vote])
    
    redirect_to post_url(current_post_vote.post)    
  end
  
  def delete
  end
  
  def index
  end
  
  def show
  end
end
