$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#welcomeView"));
	var sidebarView = new SidebarView($("#sidebar"), model);
	var dishSearchView = new DishSearchView($("#main-content"), model);
	var sidebarView2 = new SidebarView2($("#sidebar2"), model);
	var dishItemView = new DishItemView($("#foodCol"), model);
	var dishSearchView2 = new DishSearch2($("#main-content2"), model);
	var dishDetailsView = new DishDetailsView($("#main-content3"), model);
	var dishConfirmedView = new DishConfirmedView($("#main-content4"), model); 



	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});