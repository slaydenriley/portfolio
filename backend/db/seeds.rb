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

## Create Projects
gigger = riley.projects.build(
  name: "Gigger",
  description: "Very nice banjo for sale!",
  link: "www.google.com")

gigger_comment = gigger.project_comments.build(
  author_name: "Morgan Hubbard",
  author_email: "mbhubbard@gmail.com",
  content: "Hey, this is a comment. Really nice project!"
)

## Create Posts
post = riley.posts.build(
  title: "This is my first blog post!",
  content: "Hey, this is the content of this first blog post. Enjoy!"
)

second_post = riley.posts.build(
  title: "This is my SECOND blog post!",
  content: "Hey, this is the content of this second blog post. Enjoy! Maecenas ac rhoncus nisl. Etiam vehicula pretium pellentesque. Suspendisse rhoncus vulputate sapien, nec volutpat lectus gravida non. Curabitur luctus sodales tellus eget semper. Curabitur aliquet lacus tellus, quis eleifend lorem tempus nec. Aenean convallis tristique mauris, et maximus libero mollis sit amet. Phasellus tincidunt sapien sed arcu tempus bibendum. Sed pharetra justo in nisi posuere ultricies. Maecenas luctus interdum maximus."
)

post_comment = post.post_comments.build(
  author_name: "Morgan Hubbard",
  author_email: "mbhubbard@gmail.com",
  content: "First comment on a first blog post"
)

riley.save
gigger.save
gigger_comment.save
post.save
post_comment.save
