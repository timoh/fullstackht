class CreateLabels < ActiveRecord::Migration[5.1]
  def change
    create_table :labels do |t|
      t.integer :text_id
      t.integer :category_id
      t.timestamp :labelled_at

      t.timestamps
    end
  end
end
