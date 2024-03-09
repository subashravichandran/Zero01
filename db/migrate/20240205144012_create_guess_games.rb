class CreateGuessGames < ActiveRecord::Migration[7.1]
  def change
    create_table :guess_games do |t|
      t.string :question
      t.integer :length

      t.timestamps
    end
  end
end
