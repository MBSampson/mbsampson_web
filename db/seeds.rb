# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

4.times do
  Project.create!(
    title: "R3Adspace",
    subtitle: "HTML, CSS, JavaScript, Ruby on Rails",
    url: "https://github.com/MBSampson/r3adspace",
    description: "R3Adspace is the result of my 3 week training period at Ruby Three. The application runs on Rails and utilizes popular gems such as Faker, Devise, and Stripe."
  )
end

puts "Generated Project test seeds"
