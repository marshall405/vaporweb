# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




Image.create(name: "cameron", url: "http://localhost:3001/assets/images/cam.jpg")
Image.create(name: "marshall", url: "http://localhost:3001/assets/images/mar.jpg")
Image.create(name: "matcha", url: "http://localhost:3001/assets/images/matcha.jpg")
Image.create(name: "aliens", url: "https://www.festivalclaca.cat/imgfv/b/18-182681_jessicamaccormackrmack-transparent-background-smoke-fire-png.png")
Image.create(name: "computers", url: "http://localhost:3001/assets/images/russian_computers.jpg")
Image.create(name: "pier", url: "http://localhost:3001/assets/images/vapor_pier.png")
Image.create(name: "sunset", url: "http://localhost:3001/assets/images/sunset.jpg")
Image.create(name: "alone and it's raining", url: "http://localhost:3001/assets/images/rain.jpg")
Image.create(name: "dog?", url: "http://localhost:3001/assets/images/dog.jpg")
Image.create(name: "gameboy", url: "http://localhost:3001/assets/images/gameboy.png")


Song.create(url: "http://localhost:3001/assets/audio/sail.mp3", artist: "Awolnation", name: "Sail")
Song.create(url: "http://localhost:3001/assets/audio/killyourheros.mp3", artist: "Awolnation", name: "Kill Your Heros")
Song.create(url: "http://localhost:3001/assets/audio/baller.mp3", artist: "Lil' Troy", name: "Wanna be a baller")

user = User.create(username: "Rocky", image_id: 7)
user1 = User.create(username: "Cameron", image_id: 1)
user2 = User.create(username: "Marshall", image_id: 2)
user3 = User.create(username: "User", image_id: 8)

Post.create(content: "First Post for VaporWeb '98", user_id: user.id)
Post.create(content: "This site is lit AF 🔥", user_id: user1.id)
Post.create(content: "👍", user_id: user2.id)
Post.create(content: "The human body is vapor materialized by sunshine mixed with the life of the stars.", user_id: user1.id)
Post.create(content: "uh what?", user_id: user3.id)
