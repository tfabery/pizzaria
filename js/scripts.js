//===========================BackEnd===========================
function Pizza() {
  this.size = '';
  this.crust = '';
  this.sauce = '';
  this.cheese = '';
  this.topping = [];
};

Pizza.prototype.create = function(size, crust, cheese, sauce, topping) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.sauce = sauce;
  this.topping = topping;
};

Pizza.prototype.price = function() {
  var total;
  var sizeCost;
  var crustCost;
  var cheeseCost;
  var toppingCost = 0.75 * this.topping.length;

  if (this.size === 'large') {
    sizeCost = 1;
  }
  else if (this.size === 'medium') {
    sizeCost = 0.9;
  }
  else if (this.size === 'small') {
    sizeCost = 0.75;
  }
  else {
    sizeCost = 0.5;
  }

  if (this.crust === 'thin' || this.crust === 'regular') {
    crustCost = 11;
  }
  else {
    crustCost = 15;
  }

  if (this.cheese === 'false') {
    cheeseCost = -0.75;
  }
  else {
    cheeseCost = 0;
  }

  total = (crustCost + cheeseCost + toppingCost) * sizeCost;
  return total;
};

function addTopping() {
  $('.additional').append('<div class="form-group">' +
                            '<h5>Toppping:</h5>' +
                            '<select class="topping">' +
                              '<option value="cheese">Cheese</option>' +
                              '<option value="pepperoni">Pepperoni</option>' +
                              '<option value="sausage">Sausage</option>' +
                              '<option value="chicken">Chicken</option>' +
                              '<option value="onion">Onion</option>' +
                              '<option value="pepper">Pepper</option>' +
                              '<option value="mushroom">Mushroom</option>' +
                              '<option value="jalapeno">Jalapeno</option>' +
                              '<option value="">None</option>' +
                            '</select>' +
                          '</div>')
};
//===========================FrontEnd==========================
$(function() {
  var myPizza = new Pizza();

  $('#addTopping').click(function() {
    addTopping();
  });

  $('#done').click(function(event) {
    var size = $('.size').val();
    var crust = $('.crust').val();
    var cheese = $('.cheese').val();
    var sauce = $('sauce').val();
    var toppings = [];

    $('.topping').each(function() {
      var topping = $(this).val();
      toppings.push(topping);
    });

    myPizza.create(size, crust, cheese, sauce, toppings);
    var price = myPizza.price();
    console.log(price);
  });
});
