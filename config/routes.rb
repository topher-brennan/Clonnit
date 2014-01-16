Clonnit::Application.routes.draw do
  root to: "subclons#index"

  resources :users
  resource :session
  resources :subclons do
    resources :posts, only: [:index, :new, :create]
  end
  resources :posts, only: [:show, :edit, :update, :destroy]
end
