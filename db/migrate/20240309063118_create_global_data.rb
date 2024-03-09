class CreateGlobalData < ActiveRecord::Migration[7.1]
  def change
    create_table :global_data do |t|
      t.json :fx_rates

      t.timestamps
    end
  end
end
