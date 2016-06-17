//===========================BackEnd===========================
function Pizza() {
  this.size = '';
  this.crust = '';
  this.sauce = '';
  this.topping = [];
}

//===========================FrontEnd==========================
$(function() {
  var myPizza = new Pizza();
  console.log(myPizza);
});
