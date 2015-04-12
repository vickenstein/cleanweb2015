function get_products(data, callback) {
  $.ajax({
    method: 'GET',
    url: '/products',
    data: data,
    success: function(data) {
      console.log(data);
    }
  });
}

function update_products(callback) {
  var lumens = $("#luminosity").slider("value");
  var temperature = $("#kalvin").slider("value");
  var sq_footage = 100;

  data = {lumenosity: lumens, temperature: temperature, sq_footage: sq_footage}
  get_products(data);
}
