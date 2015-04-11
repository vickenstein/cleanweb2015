ActiveAdmin.register Product do


  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  permit_params :name, :part_number, :image_url, 
        :product_url, :temperature, :luminosity, :wattage_eq, 
        :warranty, :wattage, :lifetime, :type, :price
  
  action_item :only => :index do
    link_to 'Upload CSV', :action => 'upload_csv'
  end

  collection_action :upload_csv do
    render "admin/csv/upload_csv"
  end

  collection_action :import_csv, :method => :post do
    CsvDb.convert_save("product", params[:dump][:file])
    redirect_to :action => :index, :notice => "CSV imported successfully!"
  end


end
