Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get '/' => 'home#index'

  get 'products', to: 'product#get_products'
end
