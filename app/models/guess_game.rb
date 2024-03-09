class GuessGame < ApplicationRecord
  def set_back_a_level
    update(length: length - 1) if length > 3
  end

  def progress_to_next_level
    update(length: length + 1)
  end
end
