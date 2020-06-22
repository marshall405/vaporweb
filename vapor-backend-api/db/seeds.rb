# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




Image.create(name: "cameron", url: "assets/images/cam.jpg")
Image.create(name: "marshall", url: "assets/images/mar.jpg")
Image.create(name: "matcha", url: "assets/images/matcha.jpg")
Image.create(name: "aliens", url: "https://www.festivalclaca.cat/imgfv/b/18-182681_jessicamaccormackrmack-transparent-background-smoke-fire-png.png")
Image.create(name: "computers", url: "assets/images/russian_computers.jpg")
Image.create(name: "pier", url: "assets/images/vapor_pier.png")
Image.create(name: "sunset", url: "assets/images/sunset.jpg")
Image.create(name: "alone and it's raining", url: "assets/images/rain.jpg")
Image.create(name: "dog?", url: "assets/images/dog.jpg")
Image.create(name: "gameboy", url: "assets/images/gameboy.png")

Song.create(url: "assets/audio/Vapor93.mp3", artist: "90's BB", name: "Vapor93")
Song.create(url: "assets/audio/Vapor93.mp3", artist: "90's BB", name: "AFK")
Song.create(url: "assets/audio/baller.mp3", artist: "Lil' Troy", name: "Wanna be a baller")

user = User.create(username: "Rocky", image_id: 7)
user1 = User.create(username: "Cameron", image_id: 1)
user2 = User.create(username: "Marshall", image_id: 2)
user3 = User.create(username: "User", image_id: 8)

Post.create(content: "First Post for VaporWeb '98", user_id: user.id)
Post.create(content: "This site is lit AF 🔥", user_id: user1.id)
Post.create(content: "👍", user_id: user2.id)
Post.create(content: "The human body is vapor materialized by sunshine mixed with the life of the stars.", user_id: user1.id)
Post.create(content: "uh what?", user_id: user3.id)
