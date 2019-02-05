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
	var dinnerprintout = new DinnerPrintout($("#main-content5"), model);
	var confirmHeader = new ConfirmHeader($("#confirmHead"), model); 

	var welcomeController = new WelcomeController(exampleView, model, this); 
	console.log(welcomeController); 

	// General state controller 
	var hideAllViews = function() {
		$("#main-content").hide(); // kan ändra från ("#main-content") till t ex dishSearchView
		$("#sidebar").hide();
		$("#main-content").hide(); 
		$("#sidebar2").hide(); 
		$("#foodCol").hide(); 
		$("#main-content2").hide(); 
		$("#main-content3").hide(); 
		$("#main-content4").hide(); 
		$("#main-content5").hide(); 
		$("#confirmHead").hide(); 
	}

	hideAllViews();

	this.showWelcomeScreen = function(){
		hideAllViews(); 
		$("#welcomeView").show();

	}

	this.showWelcomeScreen(); 

	this.showDishSelectScreen = function() { 
		hideAllViews(); 
		$("#sidebar").show();
		$("#main-content").show();
	}

	this.showDishDetailsScreen = function() {
		hideAllViews(); 
		$("#sidebar").show();
		$("#main-content3").show(); 
	}

	this.showSelectAgainScreen = function() {
		hideAllViews(); 
		$("#sidebar2").show(); 
		$("#main-content3").show(); 
	}

	this.showOverviewScreen = function() {
		hideAllViews(); 
		$("#confirmHead").show(); 
		$("#main-content4").show(); 
	}

	this.showPrintoutScreen = function() {
		hideAllViews(); 
		$("#confirmHead").show(); 
		$("#main-content5").show(); 	
	}



	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});