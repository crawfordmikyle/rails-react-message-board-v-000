Rails.application.routes.draw do
  namespace :api do
    resources :messages
  end


  post 'api/messages/:id/comments', to: 'api/comments#create'
  delete 'api/messages/:id/comments/:id', to: 'api/comments#destroy'

end
