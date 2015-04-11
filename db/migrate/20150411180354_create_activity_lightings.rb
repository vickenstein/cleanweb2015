class CreateActivityLightings < ActiveRecord::Migration
  def change
    create_table :activity_lightings do |t|
      t.string :name
      t.integer :min_fc
      t.integer :max_fc

      t.timestamps
    end
  end
end
