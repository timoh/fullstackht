require 'csv'

class ProcessCsv

    def self.read_file(path)

        puts "Reading file from #{path}"

        arr = CSV.read(path)
        header = arr.shift

        return arr.map { |a| Hash[ header.zip(a)] }

    end

    def self.rows_for_transactions(array)

        array.each do |row|

            t = Transaction.new
            t.date = Date.parse(row.fetch("date"))
            t.text = row.fetch("text")
            t.amount = row.fetch("amount").to_f
            t.balance = row.fetch("balance").to_f
            t.row_id = row.fetch("row_id").to_i
            t.text_id = row.fetch("text_id").to_i
            t.digest = row.fetch("digest")

            t.save!

        end

        puts "Writing transactions to DB complete!"
    end

    def self.rows_for_texts(array)

        array.each do |row|

            t = Text.new
            t.text = row.fetch("text")
            t.text_id = row.fetch("text_id").to_i
            t.save!

        end

        puts "Writing texts to DB complete!"
    end

    def self.rows_for_labels(array)

        array.each do |row|

            t = Label.new
            t.text_id = row.fetch("text_id").to_i
            t.category_id = row.fetch("category_id").to_i
            t.labelled_at = Time.parse(row.fetch("labelled_at"))
            t.save!

        end

        puts "Writing labels to DB complete!"
    end

    def self.rows_for_categories(array)

        array.each do |row|

            t = Category.new
            t.category_name = row.fetch("category_name")
            t.id = row.fetch("category_id").to_i
            t.save!

        end

        puts "Writing categories to DB complete!"
    end

end