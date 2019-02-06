//DishSelectScreen 
var MainContentController = function(view, model, app) {
	// ta in showDishDetailsScreen 
	console.log(view); 
	view.nextPage.click(function() {
		app.showDishDetailsScreen(); // VÄLJ VART DEN SKA GÅ
		console.log("hohoho"); 

	})
}
