class AddTextIdToTexts < ActiveRecord::Migration[5.1]
  def change
    add_column :texts, :text_id, :integer
  end
end
