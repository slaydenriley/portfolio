# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
Post.destroy_all
ProjectComment.destroy_all
PostComment.destroy_all

def User.digest(string)
  cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                BCrypt::Engine.cost
  BCrypt::Password.create(string, cost: cost)
end

## Create Users
riley = User.create(
  name: "Riley Slayden",
  email: "slaydenriley@gmail.com",
  description: "My name is Riley Slayden and this is my portfolio",
  password_digest: "#{User.digest('codydog')}")

## Create Listings
gigger = riley.projects.build(
  name: "Gigger",
  description: "Very nice banjo for sale!",
  link: "www.google.com")

gigger_comment = gigger.project_comments.build(
  author_name: "Morgan Hubbard",
  author_email: "mbhubbard@gmail.com",
  content: "Hey, this is a comment. Really nice project!"
)

riley.save
gigger.save
gigger_comment.save
