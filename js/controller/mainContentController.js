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
		//console.log(id)
		model.setId(id);
		app.showDishDetailsScreen();

	});


} // FÅ SÖKRUTAN ATT FUNKA

	

