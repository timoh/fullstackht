class CreateTexts < ActiveRecord::Migration[5.1]
  def change
    create_table :texts do |t|
      t.integer :text_id
      t.string :text

      t.timestamps
    end
  end
end
