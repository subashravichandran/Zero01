class Api::V1::GuessGameController < ApplicationController
  before_action :set_game, only: %i[ show update ]

  def show
    # Always get the available last game (By Default there will be only one game)
    render json: { id: @game.id, question: @game.question, length: @game.length}
  end

  def update
     # check if answer is correct and increment length
    if params[:answer] == @game.question
      @game.progress_to_next_level
      render json: { message: 'Correct guess', level: @game.length }
    else
      @game.set_back_a_level
      render json: { message: 'OOPS wrong answer', level: @game.length }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_game
    @game = GuessGame.last
  end

  # Only allow a list of trusted parameters through.
  def game_params
    params.require(:game).permit(:question, :length)
  end
end
