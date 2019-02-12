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
		console.log(id)
		model.setId(id);
		console.log(model.getId());
		// model.setId(model.getId()); 
		console.log("SKRIVS DET"); 
		
		// model.getId();
		// model.getId(model.setId(id));
		// console.log(model.getId());
		// console.log(model.setId());
		app.showDishDetailsScreen();

	});



} // FÅ SÖKRUTAN ATT FUNKA

	

