<<<<<<< HEAD
//DishSelectScreen 
=======
//DishDetailsScreen 
>>>>>>> 9a875efe995deacdf23d4e93bcea8a1b3e862bcb
var DishDetailsController = function(view, model, app, id) {
	// console.log(view); 

	// Kan också vara ett sätt: 
  	// view.goBackSearchButton.addEventListener('click',function(){
  	// 	app.showDishSelectScreen();

	view.goBackSearchButton.click(function() {
		app.showDishSelectScreen(); // Ska gå tillbaka till screen 2
	}); 

	// Kan också vara ett sätt:
	// view.addToMenuButton.addEventListener('click',function(){
 	//  	app.showSelectAgainScreen();

	view.addToMenuButton.click(function() {
		app.showSelectAgainScreen(); // Ska gå tillbaka till screen 2
    	model.setId(event.currentTarget.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].id);
   		model.addDishToMenu(model.getId());
	    var dishPrice = model.getDishPrice(model.getId());

    	// model.addDishToMenu(100); 
		// (selectedDish)
		// lägg till ruta med added dish
		// app.showSelectAgainScreen($("#sidebar")); 
		// model.addDishToMenu(); 
	});

	// view.addToMenuButton1.click(function() {
	// 	app.showSelectAgainScreen(); // Ska gå tillbaka till screen 2
	// 	model.addDishToMenu(100); 
	// });

/*
    view.container.on('click', '.buttonAdd', function(){
    var id = $(this).attr('id');
    view.currentDishId = id;
    model.addDishToMenu(id);
});
*/

}

//ExampleViewController Object constructor
// var DetailsController = function(view, model, app ) {

//   view.backToSearch.click(function(){
//     app.backToSearch();
//   });

//   view.addToMenu.click(function(){
//     model.setId(event.currentTarget.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].id);
//     model.addDishToMenu(model.getId());
//   });



// }