Rails.application.routes.draw do
  namespace :api do
    resources :messages
  end

  get '/api/messages/:message_id/comments', to: 'api/comments#show'
  post '/api/messages/:message_id/comments', to: 'api/comments#create'
  delete '/api/messages/:message_id/comments/:comment_id', to: 'api/comments#destroy'

end
