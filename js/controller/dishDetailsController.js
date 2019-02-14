//DishSelectScreen 
var DishDetailsController = function(view, model, app, id) {
	// console.log(view); 


//I app skickar vi ju in mian-content3, som finns i index under container-fluid. Vi säger alltså till föräldern att någon av dens barn har 
//klickat på en knapp och vi måste säga vilket barn. 
  	view.getContainer().click(function(event) {  
  				if (event.target.matches("#GoBackButton")) {
  					app.showDishSelectScreen(); // Ska gå tillbaka till screen 2
  				}
	}); 

  	view.getContainer().click(function(event) {  
  				if (event.target.matches("#buttonAdd")) {
  					return sumDish; // ska addera i sidebar
  				}
	}); 

 

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

<<<<<<< HEAD
	// view.addToMenuButton.click(function(){
	//     model.setId(event.currentTarget.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].id);
	//     model.addDishToMenu(model.getId());
	//     var current_dish_price = model.getDishPrice(model.getId());
	// });

}
=======
}
>>>>>>> 139a3eabc83b4a62dd9233fa9cc63ce0639265b4
