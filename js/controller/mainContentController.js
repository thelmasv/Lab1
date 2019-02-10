//DishSelectScreen 
var MainContentController = function(view, model, app) {
	// console.log(view); 
	view.nextPage.click(function(e) {
		// e.target; 
		console.log(e.target); 
	    // model.setId(e.target.parentNode.parentNode.id);
	    // console.log(setId); 
		// model.addDishToMenu(allDishes[i]); 
		app.showDishDetailsScreen(); // VÄLJ VART DEN SKA GÅ
		// identifiera vilken klickat på
		// e.target.parentElement.id
		// ta bort d0 genom substring[1] och konvertera till integer 
		// skapa något så vet att går in i dish, genom model?

	}); 

	// view.search.click(function() {
	// 	event.preventDefault();
	// }); 

	view.searchbutton.click(function() {
		model.getAllDishes();
	// console.log("hejhej");

	});

	// view.clickDish.click(function(e) {
	//    //console.log(event.currentTarget.childNodes);
	//    model.setId(e.target.parentNode.parentNode.id);
	//    app.dishDetails();
	//    });


} // FÅ SÖKRUTAN ATT FUNKA

