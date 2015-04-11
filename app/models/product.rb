class Product < ActiveRecord::Base

  before_save :update_savings

  # kWh
  ELECTRICITY_RATE = 0.000118
  # h
  INC_LIFETIME = 1000
  INC_AVG_PRICE = 2.00

  DAILY_LIGHT_USAGE = 2

  EMISSIONS_FACTOR = 0.184

  AVG_CAR_CO2_EMISSION_PER_MILE = 423

  # Find lifetime savings of this product comparing to the standard
  # incadecent bulb
  def update_savings
    lifetime_savings = (wattage_eq - wattage) * lifetime * ELECTRICITY_RATE + (lifetime/INC_LIFETIME * INC_AVG_PRICE)
    self.lifetime_savings = lifetime_savings

    energy_cost = wattage * DAILY_LIGHT_USAGE * ELECTRICITY_RATE
    self.energy_cost = energy_cost

    co2_emission = wattage * lifetime * EMISSIONS_FACTOR
    self.co2_emission = co2_emission / AVG_CAR_CO2_EMISSION_PER_MILE 
  end

end
