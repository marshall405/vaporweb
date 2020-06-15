Rails.application.routes.draw do
  resources :images
  # resources :users
  post 'users', to: 'users#user'
  post 'users/new', to: 'users#create'
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
