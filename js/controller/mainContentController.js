//DishSelectScreen 
var MainContentController = function( view, model, app ) {

	$("#exampleFormControlSelect1").change( function() {
	    
	    view.update("selectType");

	});

	$("#searchInput").change( function() {
	    
		view.update("selectFilter");

	});

	view.searchButton.click( function() {

	    view.update("searchDish");

	});


	view.displayedDish.click( function() { //här väljs dish så den går till details

		var id = $(this).attr('id');
		model.setId(id);
		model.getId(id);
		console.log(model.getId());
		app.showDishDetailsScreen();

	});


} // FÅ SÖKRUTAN ATT FUNKA

	

