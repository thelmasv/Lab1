//ExampleViewController 
var WelcomeController = function(view, model, app) {
	// ta in showDishSelectScreen 
	console.log(view); 
	view.welcomeButton.click(function() {
		app.showDishSelectScreen(); //?
		console.log("hallej"); 

	})
}

//en rad här och en rad i app för att koppla ihop med showDishSelectScreen

//only show welcome screen 