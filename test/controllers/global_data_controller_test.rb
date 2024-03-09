require "test_helper"

class GlobalDataControllerTest < ActionDispatch::IntegrationTest
  setup do
    @global_datum = global_data(:one)
  end

  test "should get index" do
    get global_data_url, as: :json
    assert_response :success
  end

  test "should create global_datum" do
    assert_difference("GlobalDatum.count") do
      post global_data_url, params: { global_datum: { fx_rates: @global_datum.fx_rates } }, as: :json
    end

    assert_response :created
  end

  test "should show global_datum" do
    get global_datum_url(@global_datum), as: :json
    assert_response :success
  end

  test "should update global_datum" do
    patch global_datum_url(@global_datum), params: { global_datum: { fx_rates: @global_datum.fx_rates } }, as: :json
    assert_response :success
  end

  test "should destroy global_datum" do
    assert_difference("GlobalDatum.count", -1) do
      delete global_datum_url(@global_datum), as: :json
    end

    assert_response :no_content
  end
end
