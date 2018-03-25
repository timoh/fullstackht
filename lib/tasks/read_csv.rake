namespace :read_csv do
  desc "Write texts from CSV to DB"
  task transactions: :environment do
    arr = ProcessCsv.read_file('public/transactions.csv')
    ProcessCsv.rows_for_transactions(arr)
  end

  desc "Write texts from CSV to DB"
  task texts: :environment do
    arr = ProcessCsv.read_file('public/texts.csv')
    ProcessCsv.rows_for_texts(arr)
  end

  desc "Write labels from CSV to DB"
  task labels: :environment do
    arr = ProcessCsv.read_file('public/labels.csv')
    ProcessCsv.rows_for_labels(arr)
  end

  desc "Write categories from CSV to DB"
  task categories: :environment do
    arr = ProcessCsv.read_file('public/categories.csv')
    ProcessCsv.rows_for_categories(arr)
  end

end
