//DishSelectScreen 
var DishDetailsController = function(view, model, app) {
	// console.log(view); 

	// Kan också vara ett sätt: 
  	// view.goBackSearchButton.addEventListener('click',function(){
  	// 	app.showDishSelectScreen();

	view.goBackSearchButton.click(function() {
		app.showDishSelectScreen(); // Ska gå tillbaka till screen 2
	}); 

	// Kan också vara ett sätt:
	// view.addToMenuButton.addEventListener('click',function(){
 	//  	app.showSelectAgainScreen();

	view.addToMenuButton.click(function() {
		app.showSelectAgainScreen(); // Ska gå tillbaka till screen 2
	}); 

}
