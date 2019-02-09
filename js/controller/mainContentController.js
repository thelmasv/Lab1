//DishSelectScreen 
var MainContentController = function(view, model, app) {
	// console.log(view); 
	view.nextPage.click(function() {
		app.showDishDetailsScreen(); // VÄLJ VART DEN SKA GÅ
		// console.log("hohoho"); 
	}); 

	view.search.click(function() {
		 // HINDRAR FRÅN ATT KOMMA TILL FÖRSTASIDAN
	// console.log("hohoho");
		model.getAllDishes();
	console.log("hejhej");

	});




} // FÅ SÖKRUTAN ATT FUNKA

