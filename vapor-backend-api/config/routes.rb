Rails.application.routes.draw do
  resources :songs, only: :index

  resources :images
  
  patch 'users/image', to: 'users#image'

  post 'users', to: 'users#user'
  post 'users/new', to: 'users#create'
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
