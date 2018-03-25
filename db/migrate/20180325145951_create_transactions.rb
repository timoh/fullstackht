class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.date :date
      t.string :text
      t.decimal :amount
      t.decimal :balance
      t.integer :row_id
      t.integer :text_id
      t.string :digest

      t.timestamps
    end
  end
end
