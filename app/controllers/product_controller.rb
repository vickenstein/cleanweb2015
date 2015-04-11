class ProductController < ApplicationController

  def get_products
    products = Product.all
    render json: products
  end

  def create
    product = params['product']
    product = Product.new(product)
    if product.save
      puts "Success"
    else
      puts "Failure"
    end
  end

end
