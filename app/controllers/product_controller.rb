class ProductController < ApplicationController

  def get_products
    luminosity = params[:luminosity] ? params[:luminosity] * 1.0 : 2000.00
    temperature = params[:temperature] ? params[:temperature] * 1.0 : 3000.00
    sq_footage = params[:sq_footage] ? params[:sq_footage] : 120
    sort_by = params[:sort_by] ? params[:sort_by] : 'price'

    query = "
        select 
          name,
          image_url,
          product_url,
          ceil(#{luminosity}/luminosity) * price total_price,
          price unit_price,
          ceil(#{luminosity}/luminosity) qty, 
          luminosity,
          wattage,
          temperature,
          lifetime_savings,
          co2_emissions co2_savings,
          energy_cost,
          0 max_energy_cost,
          0 max_lifetime,
          0 max_cO2_savings
        from 
          products
        where 
          #{luminosity}/luminosity > 1 
          and ((ceil(#{luminosity}/luminosity)*luminosity-#{luminosity})/#{luminosity}) < 0.3
          and ABS(temperature - #{temperature})/#{temperature} < 0.2"
    
    if sort_by == 'price'
        query += " order by total_price;"
    elsif sort_by == 'lifetime'
      query += " order by lifetime_savings desc;"
    elsif sort_by == 'co2'
      query += " order by co2_emissions desc;"
    elsif sort_by == 'energy'
      query += " order by energy_cost;"
    end

    products = Product.find_by_sql(query)
    max_lifetime = 0
    max_cO2_savings = 0
    max_energy_cost = 0
    products.each do |product|
      if product.lifetime_savings > max_lifetime
        max_lifetime = product.lifetime_savings
      end

      if product.co2_savings > max_cO2_savings
        max_cO2_savings = product.co2_savings
      end

      if product.energy_cost > max_energy_cost
        max_energy_cost = product.energy_cost
      end
    end

    products.collect do |p|
          p.max_energy_cost = max_energy_cost 
          p.max_lifetime = max_lifetime
          p.max_cO2_savings = max_cO2_savings
    end

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
