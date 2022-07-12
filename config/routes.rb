Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :trips
  resources :travelers
  resources :users, only: [:create]
  resources :locations
  resources :activities, only: [:create, :show]
  resources :trip_travelers, only: [:index, :destroy, :create]
  
  post '/login', to: 'sessions#login'
  delete 'logout', to: 'sessions#logout'
  get 'authorized_user', to: "users#show"

  # Defines the root path route ("/")
  get '/hello', to: 'application#hello_world'


end
