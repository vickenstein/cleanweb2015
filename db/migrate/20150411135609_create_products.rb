class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :part_number
      t.string :image_url
      t.string :product_url
      t.integer :temperature
      t.integer :luminosity
      t.integer :wattage_eq
      t.integer :warranty
      t.integer :wattage
      t.integer :lifetime
      t.integer :type
      t.float :lifetime_savings
      t.float :energy_cost
      t.float :co2_emissions
      t.float :price

      t.timestamps
    end
  end
end
