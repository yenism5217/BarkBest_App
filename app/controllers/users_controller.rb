class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
	@barks = @user.barks
	@title = @user.name
  end
  
  def new
	@user = User.new
	@title = "Register"
  end

  def create
    @user = User.new(params[:user])
    if @user.save
	  sign_in @user
      redirect_to @user
    else
      @title = "Register"
      render 'new'
    end
  end
end
