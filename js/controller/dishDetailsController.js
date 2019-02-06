//DishSelectScreen 
var DishDetailsController = function(view, model, app) {
	// ta in showDishDetailsScreen 
	console.log(view); 
	view.goBack.click(function() { //skapa ett namn på vad som ska klickas på och koppla den till index
		app.showDishSelectScreen(); // VÄLJ VART DEN SKA GÅ
		console.log("go back to previous page");

		console.log(view); 
	view.addToMenu.click(function() { //skapa ett namn på vad som ska klickas på och koppla den till index
		app.showSelectAgainScreen(); // gå till selectagain
		console.log("add to sidebar");   

	})
})

}