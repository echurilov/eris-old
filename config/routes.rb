Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  get 'sessions_controller/create'
  get 'sessions_controller/destroy'
  get 'session_controller/create'
  get 'session_controller/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end


  root to: 'root#root'
end
