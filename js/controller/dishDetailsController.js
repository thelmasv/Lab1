//DishSelectScreen 
var DishDetailsController = function(view, model, app, id) {
  	view.getContainer().click(function(event) {  
		if (event.target.matches("#GoBackButton")) {
			app.showDishSelectScreen(); 
		}
	}); 

  	view.getContainer().click(function(event, id) {  
		if (event.target.matches("#buttonAdd")) {
			model.addDishToMenu(view.dish);
			app.showDishSelectScreen(); 
		}
	}); 

}



