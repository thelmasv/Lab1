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

	view.container.on("click",'.displayedDish', function() {
		var id = $(this).attr('id');
		console.log("halli")
		model.setId(id);
		app.showDishDetailsScreen();
	}); 

}

	

