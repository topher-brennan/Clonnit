class Api::SubclonsController < ApplicationController
  def create
    params[:subclon][:creator_id] = current_user.id

    @subclon = Subclon.new(params[:subclon])

    if @subclon.save
      render :json => @subclon
    else
      render :json => @task.errors, :status => 422
    end
  end

  def new
    @subclon = Subclon.new
  end

  def show
    @subclon = Subclon.find(params[:id])
  end
  
  def index
    @subclons = Subclon.all
    render "subclons/index"
  end
end