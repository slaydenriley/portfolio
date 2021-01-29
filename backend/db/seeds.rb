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
  description: "This is my first Ruby on Rails project.
  Gigger is an app for bands and venues to manage gigs.
  People can also discover shows in their area on Gigger.",
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
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel ligula vel mauris ornare convallis.
  Quisque eget ipsum sit amet orci gravida viverra. Curabitur dapibus sed lacus nec feugiat.
  Curabitur porttitor, risus eu pulvinar interdum, est nulla porttitor sapien,
  sed convallis est tortor sit amet velit. Mauris vehicula at enim eu rutrum.
  Nunc at consequat sem, nec tincidunt lectus. Nunc elementum, mauris quis iaculis eleifend,
  justo ligula lacinia massa, sed convallis augue tortor ac velit. Ut gravida purus a diam maximus bibendum.

  In hac habitasse platea dictumst. Aliquam at porta leo, eu ultrices magna. Phasellus ipsum ipsum,
  finibus quis elit vitae, commodo pulvinar metus. In purus magna, euismod id massa non, facilisis
  ultrices diam. Suspendisse odio augue, iaculis id suscipit sed, luctus vel arcu. Etiam cursus gravida
  turpis, sit amet suscipit urna porta id. Quisque tempor justo et sapien vestibulum imperdiet egestas
  vitae felis. Duis non nulla a arcu tincidunt fermentum eget sed ligula. Orci varius natoque penatibus et
  magnis dis parturient montes, nascetur ridiculus mus. Quisque in egestas odio. Sed iaculis auctor nunc,
   vel vehicula dui pulvinar in.

  Nam tempor diam id lorem lacinia porttitor. Nullam dictum ullamcorper commodo. Suspendisse vestibulum
  volutpat nibh. Vivamus odio nunc, gravida ut placerat sit amet, pharetra sed magna. Integer eu leo erat.
  Maecenas maximus tincidunt elit, in facilisis est commodo ut. Aenean egestas sed dolor in vulputate. Nunc
  rutrum laoreet mauris vitae aliquam. Nunc in urna sem. Aliquam erat volutpat. Integer ornare ante massa,
  sit amet pulvinar nisi convallis ac. Mauris lobortis justo ante, eget mollis elit venenatis sed. Nulla non
  malesuada nisl. Duis et purus imperdiet arcu maximus lobortis.

  Vivamus sapien odio, tincidunt a ipsum pretium, lacinia sodales magna. Suspendisse pellentesque nunc
  sit amet pretium posuere. Vivamus dignissim sit amet ligula interdum venenatis. Donec fermentum consequat
  faucibus. Mauris id eros aliquet, convallis libero dignissim, convallis tortor. Curabitur pharetra nulla
  nec enim feugiat tincidunt. Fusce non sapien maximus, ultrices nunc at, feugiat lorem.

  Praesent venenatis elit libero. Maecenas neque dui, vestibulum quis diam nec, posuere molestie leo.
  Vestibulum vehicula cursus turpis, quis sodales urna pellentesque vitae. Suspendisse mattis cursus nisi,
  tristique lacinia nisl aliquet quis. Nam vehicula est sed sollicitudin finibus. Etiam vehicula eget dui
  non convallis. Vivamus in eros eu felis rhoncus accumsan id sit amet arcu. Mauris ut nunc sit amet nisi sodales
  dignissim nec eget arcu. Aliquam feugiat, urna et congue volutpat, ex erat bibendum mauris, non egestas augue
  sem ornare orci."
)

post_comment = post.post_comments.build(
  author_name: "Morgan Hubbard",
  author_email: "mbhubbard@gmail.com",
  content: "First comment on a first blog post"
)

second_post_comment = second_post.post_comments.build(
  author_name: "Cade Slayden",
  author_email: "cade@gmail.com",
  content: "Awesome blog post dude!!!"
)

riley.save
gigger.save
gigger_comment.save
post.save
post_comment.save
