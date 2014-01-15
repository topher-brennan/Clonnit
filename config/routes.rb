Clonnit::Application.routes.draw do
  resources :users
  resource :session
  resources :subclons
end
