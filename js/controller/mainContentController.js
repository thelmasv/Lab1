//DishSelectScreen 
var MainContentController = function( view, model, app ) {

	$("#exampleFormControlSelect1").change( function() {
	    view.update("selectType");
	});

	$("#searchInput").change( function() {
		view.update("selectFilter");
		// view.this; 
	});

	view.searchButton.click( function() {
	    view.update("searchDish");
	});

 //  	view.getContainer().click(function(event) {  
	// 	if (event.target.matches(".displayedDish")) {
	// 		view.update("#searchDishes"); 
	// 	}
	// }); 

	view.displayedDish.click( function() { //här väljs dish så den går till details
		var id = $(this).attr('id');
		//console.log(id)
		// view.update()
		model.setId(id);
		app.showDishDetailsScreen();

	});


} // FÅ SÖKRUTAN ATT FUNKA

	

