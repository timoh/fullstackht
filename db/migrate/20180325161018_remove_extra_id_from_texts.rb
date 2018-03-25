class RemoveExtraIdFromTexts < ActiveRecord::Migration[5.1]
  def change
    remove_column :texts, :text_id
  end
end
