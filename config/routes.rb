Rails.application.routes.draw do
  resources :projects

  get 'experience', to: 'projects#experience'
  root to: 'projects#home'
end
