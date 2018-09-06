Rails.application.routes.draw do
  resources :projects

  root to: 'projects#home'
end
