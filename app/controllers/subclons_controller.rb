class SubclonsController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]
  
  def create
    params[:subclon][:creator_id] = current_user.id

    @subclon = Subclon.new(params[:subclon])

    if @subclon.save
      redirect_to subclon_url(@subclon)
    else
      flash[:errors] = @subclon.errors.full_messages
      render :new
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
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @subclons }
    end
  end
end