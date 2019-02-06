//ExampleViewController 
var WelcomeController = function(view, model, app) {
	// ta in showDishSelectScreen 
	// console.log(view); 
	view.welcomeButton.click(function() {
		app.showDishSelectScreen(); 
	}); 
}