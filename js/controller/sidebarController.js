
//Sidebar controller (page 2 and 3)
var SidebarController = function(view, model, app) {
  	view.plusButtonElement.addEventListener('click',function(){
     	model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  	});

 	view.minusButtonElement.addEventListener('click',function(){
     	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});

	view.confirmButton.click(function() {
	 	app.showOverviewScreen(); 
 	}); 

}

