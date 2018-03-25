json.extract! transaction, :id, :date, :text, :amount, :balance, :row_id, :text_id, :digest, :created_at, :updated_at
json.url transaction_url(transaction, format: :json)
