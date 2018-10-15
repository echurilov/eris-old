Rails.application.routes.draw do
  namespace :api do
    get 'memberships/create'
    get 'memberships/destro'
  end
  get 'memberships/create'
  get 'memberships/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :destroy]
    resources :memberships, only: [:create, :destroy]
    # resources :channels, only: [:index, :show, :create, :destroy]
  end

  root to: 'root#root'
end
