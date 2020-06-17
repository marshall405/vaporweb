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



user = User.create(username: "Rocky", image_id: 1)

post = Post.create(content: "First Post for VaporWeb '98", user_id: user.id)