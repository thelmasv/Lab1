
//Sidebar controller (page 2 and 3)
var SidebarController = function(view, model, app) {
	// console.log(view.plusButtonElement)
  	view.plusButtonElement.addEventListener('click',function(){
     	model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  	});

 	view.minusButtonElement.addEventListener('click',function(){
     	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});

	view.confirmButton.click(function() {
	 	app.showOverviewScreen(); 
	 	// lägg till något med model. som sparar meny, eller behövs kanske inte? 

 	}); 

}

