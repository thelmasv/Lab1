//DishSelectScreen 
var MainContentController = function(view, model, app) {
	// ta in showDishSelectScreen 
	console.log(view); 
	view.searchButton.click(function() {
		app.showDishSelectScreen(); //?
		console.log("hallej"); 

	})
}

//en rad här och en rad i app för att koppla ihop med showDishSelectScreen

//only show welcome screen 