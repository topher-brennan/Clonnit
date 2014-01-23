class Api::PostVotesController < ApplicationController
  def create
    if current_user
      params[:post_vote][:user_id] = current_user.id
    
      @post_vote = PostVote.new(params[:post_vote])
    
      @post_vote.save
      
      render :json => @post_vote
    else
      render :json => ["You must be logged in to vote"]
    end
  end
  
  def new
    @post_vote = PostVote.new
  end
  
  def edit
  end
  
  def update
  end
  
  def delete
  end
  
  def index
  end
  
  def show
  end
end
