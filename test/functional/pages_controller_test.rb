require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get bark" do
    get :bark
    assert_response :success
  end

end
