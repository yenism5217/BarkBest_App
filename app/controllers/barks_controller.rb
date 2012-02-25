class BarksController < ApplicationController
  
  def create
	@bark  = current_user.barks.build(params[:bark])
    if @bark.save
      redirect_to '/bark'
    else
      render 'pages/bark'
    end
  end
  
  def destroy
  end
end