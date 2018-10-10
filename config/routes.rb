Rails.application.routes.draw do
  get 'root/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
  end

  root to: 'root#root'
end
