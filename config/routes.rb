Clonnit::Application.routes.draw do
  root to: "subclons#index"

  resources :users
  resource :session
  resources :subclons do
    resources :posts, only: [:index, :new, :create]
  end
  resources :posts, only: [:show, :edit, :update, :destroy] do
    resources :comments, only: [:index, :new, :create]
    resources :post_votes, only: [:index, :new, :create]
  end
  resources :comments, only: [:show, :edit, :update, :destroy] do
    resources :comment_votes, only: [:index, :new, :create]
  end
  resources :post_votes, only: [:show, :edit, :update, :destroy]
  resources :comment_votes, only: [:show, :edit, :update, :destroy]
end
