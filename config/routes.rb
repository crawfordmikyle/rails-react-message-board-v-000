Rails.application.routes.draw do
  namespace :api do
    resources :messages
  end

  get '/api/messages/:id/comments', to: 'api/comments#show'

end
