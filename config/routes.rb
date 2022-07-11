Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :trips
  resources :travelers
  resources :users
  resources :locations
  resources :activities, only: [:create]
  resources :trip_travelers

  delete '/trip_travelers', to: 'trip_travelers#destroy'
  
  # Defines the root path route ("/")
  get '/hello', to: 'application#hello_world'
end
