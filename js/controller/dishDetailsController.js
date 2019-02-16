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
// IMPLEMENTERA NÅGOT SÅ ATT DISHSEARCH UPPDATERAS SÅ ATT KNAPPAR FUNKAR?

  	view.getContainer().click(function(event, id) {  
		if (event.target.matches("#buttonAdd")) {
			model.addDishToMenu(model.getId());
			app.showDishSelectScreen(); 
			console.log(model.getCurrentMenu()); 
			// det är som att den inte riktigt lägger till i menu

		}
	}); 

}


