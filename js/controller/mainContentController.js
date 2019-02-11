//DishSelectScreen 
var MainContentController = function( view, model, app ) {

	$("#exampleFormControlSelect1").change( function() {
	    
	    view.update("selectType");

	});

	view.searchButton.click( function() {

	    view.update("searchDish");

	});


	view.displayedDish.click( function() {

		var id = $(this).attr('id');
		model.setId(id);
		model.getId();
		console.log(model.getId());
		app.showDishDetailsScreen();

	});



} // FÅ SÖKRUTAN ATT FUNKA

	

