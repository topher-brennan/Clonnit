Clonnit::Application.routes.draw do
  root to: "site#root"

  resources :users
  resource :session

  namespace :api, :defaults => { :format => :json } do
    resources :subclons do
      resources :posts, only: [:index]
    end
    resources :posts, only: [:show, :edit, :update, :destroy, :new, :create] do
      resources :comments, only: [:index]
      resources :post_votes, only: [:index]
    end
    resources :comments, except: [:index] do
      resources :comment_votes, only: [:index, :new, :create]
    end
    resources :post_votes, except: [:index]
    resources :comment_votes, only: [:show, :edit, :update, :destroy]
  end
end
