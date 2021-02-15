Tag.create!([
  {name: "Ruby"},
  {name: "Rails"},
  {name: "Sinatra"},
  {name: "React/Redux"},
  {name: "Javascript"}
])
Post.create!([
  {title: "My Portfolio Website | Rails/React+Redux", content: "<p>Hi everyone! Well, this is finally it. After a year and a half of hacking away at Flatiron’s online self-paced software engineering course, I’ve finished my last project. The crux of the course. A “magnum opus.” The most frustrating, bug-ridden $%\#$@#….well, nevermind. I DID IT!</p><p>For my final project, I decided to build something that would help kickstart my career in web development. Using a Rails API backend and React + Redux on the frontend, I created my very own portfolio website to showcase my previous work at Flatiron, my blog posts, and my future work as a developer.</p><p>That’s right, my portfolio project is a portfolio. 🤯</p><h2>Video Walkthrough</h2><p>I’ll add a link here when I get to the walkthrough tonight, Feb 14th 2021…</p><h2>Rails API Overview</h2><p>My backend is fairly simple. I have 5 tables: users, posts, comments, tags, and posts_tags (a join table to create a belongs_to_and_has_many relationship between posts and tags). While the primary user on this application is me (as an admin), people are able to signup on my website to post comments on my projects and blog. Here is my schema.db file:</p><pre class=\"ql-syntax\" spellcheck=\"false\">create_table \"comments\", force: :cascade do |t|\n    t.text \"content\"\n    t.integer \"post_id\"\n    t.datetime \"created_at\", precision: 6, null: false\n    t.datetime \"updated_at\", precision: 6, null: false\n    t.integer \"user_id\"\n  end\n\n  create_table \"posts\", force: :cascade do |t|\n    t.string \"title\"\n    t.text \"content\"\n    t.integer \"user_id\"\n    t.datetime \"created_at\", precision: 6, null: false\n    t.datetime \"updated_at\", precision: 6, null: false\n    t.string \"category\"\n    t.string \"image_link\"\n  end\n\n  create_table \"posts_tags\", id: false, force: :cascade do |t|\n    t.bigint \"post_id\", null: false\n    t.bigint \"tag_id\", null: false\n    t.index [\"post_id\", \"tag_id\"], name: \"index_posts_tags_on_post_id_and_tag_id\"\n  end\n\n  create_table \"tags\", force: :cascade do |t|\n    t.string \"name\"\n    t.datetime \"created_at\", precision: 6, null: false\n    t.datetime \"updated_at\", precision: 6, null: false\n  end\n\n  create_table \"users\", force: :cascade do |t|\n    t.string \"name\"\n    t.string \"email\"\n    t.text \"description\"\n    t.string \"password_digest\"\n    t.datetime \"created_at\", precision: 6, null: false\n    t.datetime \"updated_at\", precision: 6, null: false\n    t.boolean \"admin\", default: false\n  end\n</pre><p>I’ve been comfortable working with Rails for a while now, so the backend was a breeze to set up! Once I got all of my associations working, controllers, and models built, the only maintaince I had to do throughout this project was update my JSON serializers to render the information I needed on the frontend.</p><h2>Frontend Overview (ReactJS + Redux)</h2><p>My frontend using React + Redux was a HUGE learning experience for me. While I breezed through the React and Redux sections in the course, I never really quite understood complex they were until I began coding my project. The first hurdle I had to get over was the project structure using containers, components, actions, and reducers. It took me a long time to understand the “flow” and be comfortable implementing new features.</p><p>As I coded along, my project became riddled with files and I had to condense the project into even MORE folders. Holy cow, talk about a lot to keep track of. While I love the idea behind Redux, it surely makes you code a ton to even build the simplest of features.</p><p>From the basic user, my frontend looks simple and minimalistic. I have a home page, project page, post page, and resume page. In addition to this, there are signup and login components for users wanting to comment on my posts.</p><p>From the admin side, the site gets a lot more complex. Admins on my website have access to a full dashboard, which includes a post/project builder, editor, user accounts manager, and tag manager. The “backend of the frontend” is a fully operational CMS (content management system) for myself, much like Wordpress!</p><p>While I won’t go into specific details of my containers, components, actions, and reducers (feel free to scour my code&nbsp;<a href=\"http://github.com/slaydenriley/portfolio\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(64, 64, 64);\">here</a>), I do want to point out one feature on the frontend that I’m very proud of: my&nbsp;<strong>rich text editor.</strong></p><h2>Rich Text Editor using Quill</h2><p>Because I was creating a CMS for myself, I wanted to be able to&nbsp;<em>style</em>&nbsp;and&nbsp;<em>design</em>&nbsp;my blog posts the way I wanted them to appear on the web, just like you would do with Wordpress or Medium. So, I began researching how this could be possible. I came across “Rich Text Editors,” which essentially convert styled content into HTML that can be saved as a string to the database. Upon render, the HTML string is converted back into straight HTML and displayed on the page. Cool!</p><p>I found that the Quill Editor would best suit my needs, so I went ahead and installed it with npm. After some configuration and troubleshooting, I got what I accomplished, a fully functioning rich text editor!</p><p><img src=\"https://i.imgur.com/ItKpiAp.png\" alt=\"image\"></p><p>And there we go! As a published post, it is styled exactly how I did it in my editor.</p><p><img src=\"https://i.imgur.com/ecWTmEc.png\"></p><h2>Conclusion</h2><p>I’ve learned so much at my time at Flatiron and I’m incredibly excited to continue my education as I transition into a new career. This portfolio project was at times frustrating, rewarding, complicated, and enjoyable, but overall I am so happy to be comfortable with React and Redux now, and I can’t wait to dive even deeper into those technologies.</p><p>Please feel free to check out my code&nbsp;<a href=\"http://github.com/slaydenriley/portfolio\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(64, 64, 64);\">here.</a></p><p>If you’re working through your React/Redux project, or any other project at Flatiron for that matter, feel free to reach out if you have any questions or need some motivation.</p><p>-Riley Slayden</p>", user_id: 14, category: "post", image_link: "https://i.imgur.com/6jno1XU.png"},
  {title: "Gigger | Ruby on Rails Application", content: "<iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/rlJHyWHkSy8?showinfo=0\"></iframe><p><br></p>", user_id: 14, category: "project", image_link: "https://mondrian.mashable.com/lead-img-march-15-coding-courses-on-sale.jpeg"},
  {title: "Banjo Market | Sinatra Application", content: "<iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/_udRDySJdNE?showinfo=0\"></iframe><p><br></p>", user_id: 14, category: "project", image_link: "https://i.imgur.com/yyvCj9U.png"},
  {title: "Banjos | A Ruby CLI Gem", content: "<iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/pXEBp6B22V0?showinfo=0\"></iframe><p><br></p>", user_id: 14, category: "project", image_link: "https://i.imgur.com/JfmnTbV.png"},
  {title: "Banjo Market - Sinatra App", content: "<p>Hi everyone! For my second porfolio project for Flatiron, I decided to extend the theme from my first CLI project: banjos! I set out to build a used banjo marketplace website using Sinatra.</p><p><br></p><p><strong>This is what I wanted my app to do:</strong></p><ul><li>Create, Read, Update, and Delete (CRUD) both banjos and users</li><li>Allow users to login, edit their profile, and view other user’s profiles (and not edit them!)</li><li>When a user account gets deleted, their listings get deleted too</li><li>A non logged in user can only view ‘/login’ page and ‘/signup’ page</li><li>When an error occurs during account creation/editing, display a flash message to the user (e.g. “Your passwords do not match!”)</li><li>Have an overall visually pleasing asthetic (a challenge considering this was my first time doing anything front-end!)</li></ul><p>I began by building a very basic MVC, to first CRUD users. Once I figured out the routing, I began building CRUD for banjo listings.</p><p>My models used a :has_many, :belongs_to relationship. This is where I ran into my first confusing error. For some reason, I wasn’t able to connect the users to their listings. When a new listing was created, its user_id was not correlating with the user that created it.</p><p><br></p><p>So, after quite a bit of research on Google and Stack Overflow, I found my problem, WHICH WAS SO OBVIOUS. I never created a column in the banjos table for a users_id. And thus, I created a new migration to add a users_id column and my association issue was solved.</p><p><br></p><p>Everything after that was smooth-sailing. Once I got all of the backend part of the application written, I moved onto the front-end aspect: HTML, erb, and CSS.</p><p>The front-end development was much easier than I expected, considering I had very little experience with it. There are some incredible resources for CSS and HTML help online, and this proved to be very helpful to me. While I created a fairly good looking deskop site, my CSS responsiveness for different screens was not perfect.</p><p><br></p><p>Moving into the future, I now have a much better understanding on how to structure HTML to make for easier CSS styling and responsiveness.</p><p><strong>Here are a couple screenshots from a logged in user:</strong></p><p><img src=\"https://i.imgur.com/yyvCj9U.png\"></p><p><img src=\"https://i.imgur.com/zXsFn3P.png\"></p><p><img src=\"https://i.imgur.com/3aZ6t9u.png\"></p><p><img src=\"https://i.imgur.com/zMnVioi.png\"></p><p>Much like my first portfolio project, beginning this Sinatra project was extremely daunting at first. I did not feel like I understood Sinatra and ActiveRecord enough to be able to build my own app. But, I’ve found that I learn best when I am building a project of my own and researching the problems and errors that go along with it.</p><p><br></p><p>And with that said, if you are feeling nervous about the Sinatra project, YOU CAN DO IT! You will figure it out and you will learn a ton in the process.</p><p>Thanks for reading! You can view my project&nbsp;<a href=\"https://github.com/slaydenriley/banjo_market\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(64, 64, 64);\">Github repo here</a>. Feel free to check it out and run it on your local server.</p>", user_id: 14, category: "post", image_link: "https://i.imgur.com/yyvCj9U.png"},
  {title: "CLI Portfolio Project, stelling_banjos", content: "<p>While coding consumes many hours of my day, my true “day job” is not as a student at Flatiron. It is, rather, as a professional banjo player. Throughout the year, I travel around the country with my band “National Park Radio” and play music for thousands of people at festivals, breweries, bars, houses, parks…you name it.</p><p><br></p><p>That being said, I am OBSESSED with banjos. Specifically, Stelling banjos, which I believe are the best banjos ever built. So for my CLI Data Gem porfolio project, I thought it would be fun to create a “Stelling Banjo Catalog” which people could use to view all the Stelling banjos for sale on elderly.com, get the price, and optionally view more information about each banjo.</p><p><br></p><h1>Building My&nbsp;<em>stelling_banjos</em>&nbsp;Gem</h1><p><br></p><p>Before beginning this project, I was incredibly nervous. I felt like I did not understand enough about OO Ruby to actually build a gem of my own. However, the Music CLI final project and the Student Scraper proved to me that I COULD do these things, and after completing them I got a burst of confidence.</p><p><br></p><p>For the stelling_banjos gem, I used three classes, all under the&nbsp;<strong>StellingBanjos</strong>&nbsp;module: a&nbsp;<strong>Scraper Class</strong>, which scrapes data from elderly.com using Nokogiri; a&nbsp;<strong>Banjo Class</strong>, which actually creates the banjos from scraped info from the Scraper Class; and finally a&nbsp;<strong>CLI Class</strong>&nbsp;which ran the CLI and styled it to be visually pleasing to the user.</p><p><br></p><p>The program works like this:</p><ol><li>The executable (“../bin/banjo”) starts the CLI class by calling&nbsp;<em>StellingBanjos::Cli.new.start</em></li><li><br></li><li>If the user decides to enter the catalog, the Scraper Class uses the provided link to scrape the webpage and put information into class variable,&nbsp;<em>@@all.</em></li><li><br></li><li>At this point, the Banjo Class creates banjos through a class method,&nbsp;<em>create_from_catalog</em>, which takes in the hash from Scraper.all</li><li><br></li><li>The CLI now neatly prints the banjos into a catalog format, as seen here:</li></ol><pre class=\"ql-syntax\" spellcheck=\"false\">Loading...\n\n                   ~ Supplied by www.elderly.com ~\n    1. Stelling Staghorn with Old Wood Rim &amp; Case, SN7307 - $6,250\n    2. Stelling Master Flower (1995) - $3,600\n    3. Stelling Bellflower (1984) - $2,700\n    4. Stelling Crusader (2006) - $3,275\n    5. Stelling Swallowtail with Old Wood Rim &amp; Case - $4,600\n    6. Stelling Sunflower with Old Wood Rim &amp; Case - $3,900\n    7. Stelling Crusader with Old Wood Rim &amp; Case - $3,900\n    8. Stelling Bellflower (1977) - $2,750\n    9. Stelling Sunflower (1988) - $2,850\n    10. Stelling Bellflower with Old Wood Rim &amp; Case - $3,900 - SOLD OUT\n    11. Stelling Sunflower (2013) - $3,200 - SOLD OUT\n    12. Stelling Red Fox (2002) - $2,950 - SOLD OUT\n    13. Stelling Carolinian Deluxe (1989) - $5,500 - SOLD OUT\n    14. Stelling Master Flower with Old Wood Rim &amp; Case - $4,500 - SOLD OUT\n    15. Stelling Red Fox with Old Wood Rim &amp; Case - $3,900 - SOLD OUT\n    16. Stelling Staghorn with Old Wood Rim &amp; Case, SN7297 - $6,250 - SOLD OUT\n    17. Stelling Staghorn with Old Wood Rim &amp; Case - $6,630 - SOLD OUT\n    MENU\n    ══════════════════════════════════════════\n    -Enter a banjo number for more information\n    -Type 'Exit' to exit\n    ══════════════════════════════════════════\n</pre><ol><li>The user can then enter a banjo number for more information, or leave the program</li><li>If they choose more information, the input number retrieves the link provided as an instance of the banjo object, and hands it over to the Scraper class to scrape the detailed information page</li><li>This is then displayed neatly to the user through the CLI Class, like this:</li></ol><pre class=\"ql-syntax\" spellcheck=\"false\">3\n    Loading...\n        █ STELLING BELLFLOWER (1984) - $2,700\n        █ A fine resonator banjo, this Stelling Bellflower has a walnut neck and\n        resonator. The ~3/4\" maple rim is equipped with an 11” synthetic head\n        and a Stelling Wedge-Fit tone ring. Other features include pearl flower\n        &amp; leaf fingerboard inlays, a one-piece flange, and ivoroid binding throughout.\n        This banjo is in very good+ condition.\n        █ Interested in buying? Go here:\n        ==&gt; https://www.elderly.com/collections/stelling/products/stelling-bellflower-1984\n    MENU\n    ══════════════════════════════════════════\n    -Enter another banjo number\n    -Type 'Catalog' to view the catalog again\n    -Type 'Exit' to exit\n    ══════════════════════════════════════════\n</pre><ol><li>If the banjo is sold out, instead of displaying a link going to elderly.com, a google link will be displayed so the user can search google for that specific banjo instead:</li></ol><pre class=\"ql-syntax\" spellcheck=\"false\">10\n    Loading...\n        █ STELLING BELLFLOWER WITH OLD WOOD RIM &amp; CASE - $3,900\n        █ Handcrafted in Heards, Virginia, this professional-level banjo showcases\n        the natural beauty of unstained Virginia black walnut.\n        █ SORRY! This banjo is SOLD OUT from elderly.com! Let's check Google instead...\n        ==&gt; https://www.google.com/search?q=stelling-bellflower-with-old-wood-rim-&amp;-case\n    MENU\n    ══════════════════════════════════════════\n    -Enter another banjo number\n    -Type 'Catalog' to view the catalog again\n    -Type 'Exit' to exit\n    ══════════════════════════════════════════\n</pre><p>Originally, I had it so the Scraper Class would scrape&nbsp;<em>both</em>&nbsp;the catalog and the more information page for EVERY banjo at the start of the program. This however caused an extremely slow load time. I refactored the code so that the detailed information page was only scraped if the user wanted that information.</p><p><br></p><p>So there it is! While I feel like my vocabulary is still lacking a bit with OO Ruby, I do&nbsp;<em>finally</em>&nbsp;have a clear understanding on how classes interact with each other and the differences between instance/class methods.</p><p><br></p><p>Overall, I am really proud of myself for building this gem. 2 weeks ago, I never would have imagined being able to do this. For anyone worried about their first porftolio project, keep your head high, search google a LOT, and don’t give up! It’ll make sense eventually.</p><p><br></p><p>If you want to check out my public repo, you can do so here: https://github.com/slaydenriley/stelling_banjos. Or if you want to install my gem and run it in your terminal (super easy!), simply type “gem install stelling_banjos”, and type “banjo” into your terminal to start the CLI.</p><p><br></p><p>You can also view my video overview of the gem here: https://www.youtube.com/watch?v=pXEBp6B22V0</p><p>Thanks for reading, Riley</p>", user_id: 14, category: "post", image_link: "https://i.imgur.com/JfmnTbV.png"},
  {title: "Music Market | Vanilla Javascript + Rails API", content: "<iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/TYAIuF82v0M?showinfo=0\"></iframe><p><br></p>", user_id: 14, category: "project", image_link: "https://i.imgur.com/BQU98nZ.png"},
  {title: "Gigger - A Rails Application for bands and venues", content: "<p>Hi everyone!</p><p>For my Rails portfolio project, I created an app called “Gigger,” to help bands and venues book and manage upcoming shows. This project was certainly the biggest challenge for me yet, but I feel like I’m finally getting the hang of rails.</p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/rlJHyWHkSy8\" height=\"315\" width=\"560\"></iframe><p><br></p><h1>Models</h1><p>There are 4 main models in my application: User, Band, Venue, and Gig.</p><h2>User</h2><pre class=\"ql-syntax\" spellcheck=\"false\">has_many :band_users\nhas_many :bands, through: :band_users\nhas_many :venue_users\nhas_many :venues, through: :venue_users\nhas_many :gigs, through: :bands\nhas_many :genres, through: :bands\n</pre><h2>Band</h2><pre class=\"ql-syntax\" spellcheck=\"false\">has_many :band_users\nhas_many :users, through: :band_users\n\nhas_many :gigs, dependent: :destroy\nhas_many :venues, through: :gigs\nbelongs_to :genre\n</pre><h2>Venue</h2><pre class=\"ql-syntax\" spellcheck=\"false\">has_many :gigs, dependent: :destroy\nhas_many :bands, through: :gigs\n\nhas_many :venue_users\nhas_many :users, through: :venue_users\n</pre><h2>Gig</h2><pre class=\"ql-syntax\" spellcheck=\"false\">belongs_to :band\nbelongs_to :venue\n</pre><p><br></p><p>There is also a Genre model, and two many-to-many tables: band_users and venue_users. This is because a user has_many bands and a band has_many users. The same goes with users and venues.</p><h1>App overview</h1><p>There are three main account types a user can make: “band member,” “venue manager,” and “concert goer.” Each account type has different permissions and responsibilities.</p><ul><li>A band member can create a new band, be added to existing bands, edit/delete their own band, create gigs for their band at the venue of their choice, and assign or create new genres.</li><li><br></li><li>A venue manager can create a new venue, be added to an exisiting venue, edit/delete their own venue, and create gigs at their venue.</li><li><br></li><li>A concert goer can view information about bands, venues, and upcoming shows.</li><li><br></li><li>All users can edit/delete their own account, but not others (unless account is an admin).</li></ul><p>To manage user abilities, I used the gem “cancancan” to define what each user is permitted to do. Here is how that is managed, in my ability.rb file:</p><pre class=\"ql-syntax\" spellcheck=\"false\">class Ability\n  include CanCan::Ability\n\n  def initialize(user)\n    can :read, :all\n    can [:create, :new], User\n    if user.present?\n      if user.admin?\n        can :manage, :all\n      # Band Member Authority\n      elsif user.account_type == \"band_member\"\n        Band.all.each do |band|\n          band.users.each do |owners|\n            if owners.id == user.id\n              can :manage, band\n            end\n          end\n        end\n        can :create, Band\n        can :manage, User, id: user.id\n        Gig.all.each do |gig|\n          gig.band.users.each do |owners|\n            if owners.id == user.id\n              can :manage, gig\n            end\n          end\n        end\n        can :create, Gig\n        can :read, :all\n        # Venue Manager Authority\n      elsif user.account_type == \"venue_manager\"\n        Venue.all.each do |venue|\n          venue.users.each do |owners|\n            if owners.id == user.id\n              can :manage, venue\n            end\n          end\n        end\n        Gig.all.each do |gig|\n          gig.band.users.each do |owners|\n            if owners.id == user.id\n              can :manage, gig\n            end\n          end\n        end\n        can :create, Gig\n        can :create, Venue\n        can :manage, User, id: user.id\n        can :read, :all\n        # Concert Goer Authority\n      elsif user.account_type == \"concert_goer\"\n        can :manage, User, id: user.id\n      else\n        can :read, :all\n        can :manage, User, id: user.id\n      end\n    end\n\tend\n</pre><p>This portfolio project definitely pushed me to my limits, and I learned far more than I would have expected in starting it. Feel free to clone my project and check it out! Just use “cd gigger,” and “rails s” to start it up. Let me know if you have any questions! Thanks for reading.</p><p><a href=\"https://github.com/slaydenriley/gigger/blob/master/app/models/gig.rb\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(64, 64, 64);\">Here is my github repo.</a></p><p>-Riley</p>", user_id: 14, category: "post", image_link: "https://mondrian.mashable.com/lead-img-march-15-coding-courses-on-sale.jpeg"},
  {title: "Portfolio Website (Rails + React + Redux)", content: "<p>Video walkthrough will be added here.</p>", user_id: 14, category: "project", image_link: "https://i.imgur.com/6jno1XU.png"},
  {title: "Rails + JS Portfolio Project: Music Market", content: "<p>For my Rails API and Javascript portfolio project, I created an app called “Music Market” which allows users to sell their used instruments to other users. Thus far, all of my Flatiron portfolio projects have employed a music theme, so I had to continue on with this project. :)</p><p>Before I go over the details of Music Market, let me first say that this was the most challenging project I’ve had to create at Flatiron. For whatever reason, it took me MONTHS to wrap my head around Javascript, especially after working for so long with Rails. While there are many similarities between Rails and Javascript, the small differences in syntax between the two completely threw me off. That along with dealing with multiple COVID quarantines and job switches in my normal life, this project has been a long time coming and I’m so happy to finally be finishing it.</p><p>Here is a video overview of my project:</p><h2>Rails API Overview</h2><p>My Rails API backend was fairly simple to set up. I have 2 main resources:&nbsp;<strong><em>User and Listing.</em></strong></p><p>A User:</p><p><code style=\"background-color: rgb(249, 242, 244); color: rgb(199, 37, 78);\">has_many :listings</code></p><p>A Listing:</p><p><code style=\"background-color: rgb(249, 242, 244); color: rgb(199, 37, 78);\">belongs_to :user</code></p><p>Each controller renders serialized JSON to the frontend fetch requests, and can&nbsp;<em>Create, Read, Update, and Delete</em>. I also used a&nbsp;<em>Session Controller</em>, which helps with the login process and renders errors if something goes wrong:</p><pre class=\"ql-syntax\" spellcheck=\"false\">class SessionsController &lt; ApplicationController\n    def create\n        user = User.find_by(username: params[:username])\n\n        if user &amp;&amp; user.authenticate(params[:password])\n            session[:user_id] = user.id\n            render json: user, only: [:username, :name, :id]\n        elsif user == nil\n          payload = {\n            error: \"Cannot find user! Please check username.\",\n            status: 400\n          }\n          render :json =&gt; payload, :status =&gt; :bad_request\n        elsif user.authenticate(params[:password]) == false\n          payload = {\n            error: \"Incorrect password. Please check password.\",\n            status: 400\n          }\n          render :json =&gt; payload, :status =&gt; :bad_request\n        end\n    end\n\n    def destroy\n        if session[:user_id]\n            reset_session\n        end\n    end\nend\n</pre><p>That’s the basic overview of my Rails API! It was simple for me to setup and provides the basic structure required to support a JS frontend.</p><h2>Vanilla Javascript Frontend Overview</h2><p>As I stated before, JS was very difficult for me to learn. I found, however, that the more I worked on this project, the clearer it became to me.</p><p>I first started coding my frontend in a single file,&nbsp;<em>index.js</em>. However, this QUICKLY filled up with code and became incredibly confusing to read and navigate. I began thinking how I could break it up to separate my concerns. Coming from Rails, I really enjoyed using a MVC (model, view, controller) structure. Therefore, I broke up my code like this:</p><pre class=\"ql-syntax\" spellcheck=\"false\">Frontend\n    Fetchers\n\t     listing_fetcher.js\n\t     session_fetcher.js\n\t\t   user_fetcher.js\n\t\t\n    Views\n\t\t   app.js\n\t\t   listing.js\n\t\t   users.js\n</pre><p>As you can see, I separated my code between Fetchers and Views, listings and users. This helped me a TON and kept my code neat and clean. Each of these files used Javascript classes as well, so everything was nicely organized and easy to call upon from other files.</p><p>Here is an example of some fetch code:</p><pre class=\"ql-syntax\" spellcheck=\"false\">// // USER FETCHER COMMUNICATES WITH RAILS API FOR USES //\nclass UserFetcher {\n  constructor() {\n    this.fetchUsers();\n  };\n\n  fetchUsers() {\n    fetch(`${BACKEND_URL}/users`)\n    .then(users =&gt; users.json())\n    .then(users =&gt; Users.renderUsers(users))\n  };\n\n  static fetchSingleUser(id) {\n    fetch(`${BACKEND_URL}/users/${id}`)\n    .then(user =&gt; user.json())\n    .then(user =&gt; Users.renderSingleUser(user))\n  };\n\n// PATCH REQUEST TO EDIT USER //\nstatic editUser() {\n  let name = document.querySelector(\"#edit_name\").value;\n  let username = document.querySelector(\"#edit_username\").value;\n  let description = document.querySelector(\"#edit_description\").value;\n  let email = document.querySelector(\"#edit_email\").value;\n  let password = document.querySelector(\"#edit_password\").value;\n  let password_confirmation = document.querySelector(\"#edit_password_confirm\").value;\n  let id = current_user_id\n\n  let formData = {\n    name: name,\n    username: username,\n    email: email,\n    description: description,\n    password: password,\n    password_confirmation: password_confirmation,\n    id: id\n  };\n\n  let configObj = {\n     method: \"PATCH\",\n     headers: {\n         \"Content-Type\": \"application/json\",\n         \"Accept\": \"application/json\"\n       },\n       body: JSON.stringify(formData)\n    };\n\n    fetch(`${BACKEND_URL}/users`, configObj)\n    .then(user =&gt; user.json())\n    .then(function(user) {\n      if (user.status === 400) {\n        let error_message = document.querySelector(\".edit_user_error_message\")\n        error_message.innerHTML = \"\"\n        error_message.innerHTML += `&lt;p class=\"error_message\"&gt;${user.error}&lt;/p&gt;`\n        loginForm.style.display = \"block\"\n      }\n      else {\n        Users.renderSingleUser(user)\n      };\n    });\n\n};\n};\n</pre><p>And here is an example of some view code:</p><pre class=\"ql-syntax\" spellcheck=\"false\">// USER INSTANCE CREATED WHEN LOGGED IN FROM APP CLASS //\nclass Users {\n  constructor() {\n    this.listeners();\n  };\n\n// LISTENS FOR BUTTON CLICKS //\n  listeners() {\n    users.addEventListener(\"click\", function() {\n      let user = new UserFetcher\n      App.removeActiveButton()\n      users.classList.add(\"active_button\")\n    });\n    account.addEventListener(\"click\", function() {\n      UserFetcher.fetchSingleUser(current_user_id)\n      App.removeActiveButton()\n      account.classList.add(\"active_button\")\n    });\n  };\n\n// RENDERS ALL USERS //\n  static renderUsers(users) {\n    App.clearMain();\n    allUsers.style.display = \"block\";\n\n    users.forEach(user =&gt; {\n      let newHtml = `\n        &lt;button class=\"user_card\" id=\"${user.id}\"&gt;\n        &lt;h4&gt;${user.name}&lt;/h4&gt;\n        &lt;p&gt;${user.username}&lt;/p&gt;\n        &lt;p&gt;${user.email}&lt;/p&gt;&lt;/button&gt;`;\n\n      allUsers.innerHTML += newHtml\n    });\n\n    Users.userCards();\n  };\n\n// RENDERS SINGLE USER //\n  static renderSingleUser(user) {\n    App.clearMain();\n    singleUser.style.display = \"block\";\n\n    // This function takes a user's listings and iterates through them //\n    function renderListings() {\n      let listings = user.listings\n      listings.forEach(listing =&gt; {\n        let html = `&lt;p&gt;&lt;a href=\"#\" class=\"user_listings\" id=${listing.id}&gt;${listing.title}&lt;/a&gt;&lt;/p&gt;`\n        singleUser.innerHTML += html\n      });\n      Users.userListingsAccount()\n    };\n\n    // General HTML to be used for all user accounts //\n    let newHtml = `\n      &lt;h3&gt;${user.name}&lt;/h3&gt;\n      &lt;p&gt;&lt;em&gt;Username: ${user.username}&lt;/em&gt;&lt;/p&gt;\n      &lt;p&gt;&lt;em&gt;&lt;a href=\"${user.email}\"&gt;Send email&lt;/a&gt;&lt;/em&gt;&lt;/p&gt;\n      &lt;h4&gt;${user.name}'s Listings &lt;/br&gt;`\n\n    // Adds an edit button to account if user is logged in //\n    if (current_user_id === user.id) {\n      singleUser.innerHTML += newHtml + `&lt;button class=\"edit_account_button\" id=${user.id}&gt;Edit Account&lt;/button&gt;`\n      renderListings()\n      Users.editUserButton(user)\n    }\n    else {\n      singleUser.innerHTML += newHtml\n    };\n  };\n\n// MAKES USER ACCOUNTS CLICKABLE //\n  static userCards() {\n    let card = document.querySelectorAll(\".user_card\")\n    card.forEach(button =&gt; {\n      button.addEventListener(\"click\", function() {\n        UserFetcher.fetchSingleUser(`${button.id}`);\n      });\n    });\n  };\n\n  static userListingsAccount() {\n    let listings = document.querySelectorAll(\".user_listings\")\n    listings.forEach(listing =&gt; {\n      listing.addEventListener(\"click\", function () {\n        ListingFetcher.fetchSingleListing(`${listing.id}`)\n        App.removeActiveButton()\n        listings_button.classList.add(\"active_button\")\n      })\n    })\n  }\n\n  static editUserButton(user) {\n    let button = document.querySelector(\".edit_account_button\")\n    //let button_submit = document.querySelector(\".edit_listing_submit\")\n\n    button.addEventListener(\"click\", function() {\n      let name = document.querySelector(\"#edit_name\");\n      let username = document.querySelector(\"#edit_username\");\n      let description = document.querySelector(\"#edit_description\");\n      let email = document.querySelector(\"#edit_email\")\n      let password = document.querySelector(\"#edit_password\")\n      let password_confirmation = document.querySelector(\"#edit_password_confirm\")\n\n      name.value = `${user.name}`;\n      username.value = `${user.username}`;\n      description.value = `${user.description}`;\n      email.value = `${user.email}`;\n\n      App.clearMain();\n      userEditForm.style.display = \"block\";\n    });\n\n    edit_submit.addEventListener(\"click\", function() {\n      let editUser = UserFetcher.editUser(`${user.id}`);\n    });\n  };\n};\n</pre><p>Ultimately, separting everything helped me complete this project sane and also helped further my understanding of Javscript Object Orientation and how it can be used to keep things grouped together.</p><h2>Conclusion</h2><p>Thanks for taking the time to read this post! Feel free to browse my source code here: https://github.com/slaydenriley/music_market.</p>", user_id: 14, category: "post", image_link: "https://i.imgur.com/BQU98nZ.png"}
])

User.create!([
  {name: "Riley Slayden", email: "slaydenriley@gmail.com", description: "My name is Riley Slayden and this is my portfolio", password_digest: "$2a$12$cbXs9bws3GN5vP1XrbItFeziDHieupzgJ74lL6iN5onPUSFN9HWJ6", admin: true},
  {name: "Cody Dog", email: "cody@gmail.com", description: nil, password_digest: "$2a$12$NCWCd8eoET7zIQMOahXfo.Ym7Ndupx2rJUcgEIzNbyilrB29oRRyy", admin: false}
])
Tag::HABTM_Posts.create!([
