require 'test_helper'

class Api::MembershipsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_memberships_create_url
    assert_response :success
  end

  test "should get destro" do
    get api_memberships_destro_url
    assert_response :success
  end

end
