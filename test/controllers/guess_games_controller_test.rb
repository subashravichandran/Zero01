require "test_helper"

class GuessGamesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @guess_game = guess_games(:one)
  end

  test "should get index" do
    get guess_games_url, as: :json
    assert_response :success
  end

  test "should create guess_game" do
    assert_difference("GuessGame.count") do
      post guess_games_url, params: { guess_game: { length: @guess_game.length, question: @guess_game.question } }, as: :json
    end

    assert_response :created
  end

  test "should show guess_game" do
    get guess_game_url(@guess_game), as: :json
    assert_response :success
  end

  test "should update guess_game" do
    patch guess_game_url(@guess_game), params: { guess_game: { length: @guess_game.length, question: @guess_game.question } }, as: :json
    assert_response :success
  end

  test "should destroy guess_game" do
    assert_difference("GuessGame.count", -1) do
      delete guess_game_url(@guess_game), as: :json
    end

    assert_response :no_content
  end
end
