class PagesController < ApplicationController
  def bark
	@title = "Bark!best | The World's Best Encyclopinion"
    @bark = Bark.new if signed_in?
  end
  
  def sniff
	@title = "Bark!best | The World's Best Encyclopinion"
  end

end
