//DishSelectScreen 
var DishDetailsController = function(view, model, app, id) {
	// console.log(view); 

	// Kan också vara ett sätt: 
  	// view.goBackSearchButton.addEventListener('click',function(){
  	// 	app.showDishSelectScreen();

	view.goBackSearchButton.click(function() {
		app.showDishSelectScreen(); // Ska gå tillbaka till screen 2
	}); 

	view.addToMenuButton.click(function() {
		app.showSelectAgainScreen(); // Ska gå tillbaka till screen 2
    	model.setId(event.currentTarget.parentNode.parentNode.parentNode.childNodes[1].childNodes[0]);
   		model.addDishToMenu(model.getId());
	    var dishPrice = model.getDishPrice(model.getId());
	}); 

}
