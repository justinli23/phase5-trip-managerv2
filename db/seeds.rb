require 'faker'

puts "Clearing database..."
User.destroy_all
Location.destroy_all
Activity.destroy_all
Traveler.destroy_all
Trip.destroy_all
TripTraveler.destroy_all

puts "🌱 Seeding 2 Users"
User.create(name:"Justin", admin: true, password: "111", email: "justinlit23@gmail.com")
User.create(name: "Alex", password: "112", email: "alex@gmail.com")

puts "🌱 Seeding 2 Locations"
paris = Location.create(name: "Paris, France", longitude: 48.8566, latitude: 2.3522)
tokyo = Location.create(name: "Tokyo, Japan", longitude: 35.6762, latitude: 139.6503)

puts "🌱 Seeding 2 Activities"
Activity.create(name: "Eiffel Tower", location_id: paris.id)
Activity.create(name: "Tokyo Tower", location_id: tokyo.id)

puts "🌱 Seeding 10 Travelers... "
10.times {
    Traveler.create(
        name: Faker::Name.name,
        birthdate: Faker::Date.birthday(min_age: 18, max_age: 65),
        email: Faker::Internet.email,
)}

puts "🌱 Seeding 5 Trips... "
seasons = ["Summer", "Fall", "Winter", "Spring"]
5.times {
    Trip.create(
        name: seasons[rand(0..3)] + " Vacation",
        start_date: Faker::Date.forward(days: rand(14..28)),
        end_date: Faker::Date.forward(days: rand(29..42)),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFw2PWZ5pIZlTZU3CI74G8qhTnjtSj9IrWw&usqp=CAU",
        location_id: Location.all.sample.id
)}

puts "🌱 Seeding 10 TripTravelers... "
10.times {
    TripTraveler.create(
        traveler_id: Traveler.all.sample.id,
        trip_id: Trip.all.sample.id
)}