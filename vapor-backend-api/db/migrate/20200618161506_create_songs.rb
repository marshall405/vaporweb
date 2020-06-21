class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.text :url
      t.text :artist
      t.text :name

      t.timestamps
    end
  end
end
