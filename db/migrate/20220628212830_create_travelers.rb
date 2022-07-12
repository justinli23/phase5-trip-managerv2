class CreateTravelers < ActiveRecord::Migration[6.1]
  def change
    create_table :travelers do |t|
      t.string :name
      t.date :birthdate
      t.string :email
      t.string :notes
      t.string :phone
      t.string :image
      t.integer :user_id
    
      t.timestamps
    end
  end
end
