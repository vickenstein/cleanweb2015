function get_products(data, callback) {
  $.ajax({
    method: 'GET',
    url: '/products',
    data: data,
    success: function(data) {
      console.log(data);
      var products = HandlebarsTemplates['products/product']({products: data});
      console.log(products);
      $('.products').empty().append(products);
    }
  });
}

function update_products(callback) {
  var lumens = $("#luminosity").slider("value");
  var temperature = $("#kalvin").slider("value");
  var sq_footage = 100;
  var sort_by = "lifetime";
  data = {luminosity: lumens, temperature: temperature, sq_footage: sq_footage, sort_by: sort_by};
  get_products(data);
}
