Rails.application.routes.draw do
  resources :post_comments
  resources :project_comments
  resources :posts
  resources :projects
  resources :users

  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
