Rails.application.routes.draw do
  resources :projects

  get 'experience_path', to: 'projects#experience'
  root to: 'projects#home'
end
