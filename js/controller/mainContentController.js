//DishSelectScreen 
var MainContentController = function(view, model, app) {
	// ta in showDishSelectScreen 
	console.log(view); 
	view.nextPage.click(function() {
		app.showDishDetailsScreen(); // VÄLJ VART DEN SKA GÅ
		console.log("hohoho"); 

	})
}

//en rad här och en rad i app för att koppla ihop med showDishSelectScreen

//only show welcome screen 