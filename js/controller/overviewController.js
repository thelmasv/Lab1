var OverviewController = function(view, model, app) {

	// view.printButton.click(function() {
	// 	app.showPrintoutScreen(); 
	// }); 

  	view.getContainer().click(function(event) {  
		if (event.target.matches("#button1")) {
			app.showPrintoutScreen(); // Ska gå tillbaka till screen 2
		}
	}); 

}

