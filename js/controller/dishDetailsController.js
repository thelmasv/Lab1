//DishSelectScreen 
var DishDetailsController = function(view, model, app, id) {
	// console.log(view); 

	// Kan också vara ett sätt: 
  	// view.goBackSearchButton.addEventListener('click',function(){
  	// 	app.showDishSelectScreen();

	view.goBackSearchButton.click(function() {
		console.log("BACKPRESS"); 
		app.showDishSelectScreen(); // Ska gå tillbaka till screen 2
	}); 

	view.addToMenuButton.click(function() {
		console.log("TRYCKT"); 
		app.showSelectAgainScreen(); // Ska gå tillbaka till screen 2
		// model.addDishToMenu(getId()); 
		model.addDishToMenu(view.dishID());

    	// model.setId(event.currentTarget.parentNode.parentNode.parentNode.childNodes[1].childNodes[0]);
   		// model.addDishToMenu(model.getId());
	    // var dishPrice = model.getDishPrice(model.getId());
	}); 

	// view.addToMenuButton.click(function(){
	//     model.setId(event.currentTarget.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].id);
	//     model.addDishToMenu(model.getId());
	//     var current_dish_price = model.getDishPrice(model.getId());
	// });

}
