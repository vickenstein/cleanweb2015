# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Activity Lighting
ActivityLighting.create({name: 'Hallways', min_fc: 5, max_fc: 7})
ActivityLighting.create({name: 'Entertaining', min_fc: 10, max_fc: 20})
ActivityLighting.create({name: 'Dining', min_fc: 10, max_fc: 20})
ActivityLighting.create({name: 'Easy reading', min_fc: 20, max_fc: 50})
ActivityLighting.create({name: 'Bathroom', min_fc: 20, max_fc: 50})
ActivityLighting.create({name: 'Kitchen—basic lighting', min_fc: 20, max_fc: 50})
ActivityLighting.create({name: 'Kitchen—food prep', min_fc: 50, max_fc: 100})
ActivityLighting.create({name: 'General workshop lighting', min_fc: 50, max_fc: 100})
ActivityLighting.create({name: 'Fine or detailed work', min_fc: 100, max_fc: 200})