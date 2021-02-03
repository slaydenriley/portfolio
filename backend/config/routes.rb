Rails.application.routes.draw do
  resources :posts do
    resources :comments
  end

  resources :users

  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  post '/posts/:id/comments', to: 'comments#create'
  delete '/comments/:id', to: 'comments#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
