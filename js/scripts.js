//===========================BackEnd===========================
function Pizza(size, crust, cheese, sauce, topping) {
  this.size = size;
  this.crust = crust;
  this.sauce = cheese;
  this.cheese = sauce;
  this.topping = topping;
  this.price;
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
  this.price = total;
};

function resetPage() {
  $('.modal-body').empty();
  // $('.additional').empty();
  $('#confirm').modal('hide');
  $('form').trigger('reset');
}
//===========================FrontEnd==========================
$(function() {
  var myPizza = new Pizza();

  $('#done').click(function(event) {
    var size = $('.size').val();
    var crust = $('.crust').val();
    var cheese = $('.cheese').val();
    var sauce = $('.sauce').val();
    var toppings = [];

    $('input:checkbox[name=topping]:checked').each(function() {
        var topping = $(this).val();
        toppings.push(topping);
    })

    myPizza = new Pizza(size, crust, cheese, sauce, toppings);
    myPizza.price();

    $('.modal-body').html('<ul class="onPizza">' +
                            '<li>' + myPizza.size + '</li>' +
                            '<li>' + myPizza.crust + '</li>' +
                            '<li>' + myPizza.sauce + ' sauce</li>' +
                          '</ul>' +
                          '<h3>total: $' + myPizza.price + '</h3>');

    if (toppings.length === 0) {
      $('ul.onPizza').append('<li>no toppings</li>');
    }
    else {
      for (var i = 0; i < toppings.length; i ++) {
        $('ul.onPizza').append('<li>' + toppings[i] + '</li>');
      };
    }

    if (myPizza.cheese === 'false') {
      $('ul.onPizza').append('<li>NO CHEESE CUSTOMER WILL DIE</li>');
    }
  });

  $('form.pizza').submit(function(event) {
    event.preventDefault();

    resetPage();
  });
});
