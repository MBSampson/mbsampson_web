Rails.application.routes.draw do
  resources :projects

  get 'about', to: 'projects#about', as: 'projects_about'

  root to: 'projects#home'
end
