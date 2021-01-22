Rails.application.routes.draw do
  resources :post_comments
  resources :project_comments
  resources :posts
  resources :projects
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
