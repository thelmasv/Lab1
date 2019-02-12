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


<<<<<<< HEAD
	view.displayedDish.click( function() {
=======
	view.displayedDish.click( function() { //här väljs dish så den går till details

>>>>>>> 7d0346e12c6009eaa9668f86f3013f4720515689
		var id = $(this).attr('id');
		model.setId(id);
		app.showDishDetailsScreen();
	});


} // FÅ SÖKRUTAN ATT FUNKA

	

