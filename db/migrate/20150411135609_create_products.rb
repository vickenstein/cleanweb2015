class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :sku
      t.string :image_url
      t.string :product_url
      t.integer :temperature
      t.integer :luminosity
      t.integer :lifetime
      t.float :price

      t.timestamps
    end
  end
end
