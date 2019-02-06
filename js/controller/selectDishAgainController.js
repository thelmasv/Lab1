//DishSelectScreen 
var SelectDishAgainController = function(view, model, app) {
	// ta in showDishDetailsScreen 
	console.log(view); 
	view.nextPage.click(function() {
		app.showDishDetailsScreen(); // VÄLJ VART DEN SKA GÅ
		console.log("hoho2"); 

})
		/*console.log(view); 
	view.addToMenu.click(function() { //skapa ett namn på vad som ska klickas på och koppla den till index
		app.showSelectAgainScreen(); // gå till selectagain
		console.log("add to sidebar");   

	
})
*/
}