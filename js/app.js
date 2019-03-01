$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	var exampleView = new ExampleView($("#welcomeView"));
	var sidebarView = new SidebarView($("#sidebar"), model);
	var dishSearchView = new DishSearchView($("#main-content"), model);
	// var sidebarView2 = new SidebarView2($("#sidebar2"), model);
	// var dishItemView = new DishItemView($("#foodCol"), model);
	// var dishSearchView2 = new DishSearch2($("#main-content2"), model);
	var dishDetailsView = new DishDetailsView($("#main-content3"), model);
	var dishConfirmedView = new DishConfirmedView($("#main-content4"), model); 
	var dinnerprintout = new DinnerPrintout($("#main-content5"), model);
	var confirmHeader = new ConfirmHeader($("#confirmHead"), model); 

	// var dishImagesView = new dishImagesView($("#searchDishes"), model); 

	var welcomeController = new WelcomeController(exampleView, model, this); 
	var sidebarController = new SidebarController(sidebarView, model, this); 
	var dishDetailsController = new DishDetailsController(dishDetailsView, model, this);
	var mainContentController = new MainContentController(dishSearchView, model, this);  
	var confirmHeaderController = new ConfirmHeaderController(confirmHeader, model, this); 
	// var selectDishAgainController = new SelectDishAgainController(dishSearchView2, model, this); 
	var overviewController = new OverviewController(dishConfirmedView, model, this); 
	//var printoutController = new PrintoutController(dinnerprintout, model,this);
 
	// General state controller 
	var hideAllViews = function() {
		$("#welcomeView").hide();
		$("#main-content").hide();
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

	hideAllViews(); //här kallar vi på hideAllViews

	this.filter = "";

	this.showWelcomeScreen = function(){
		hideAllViews(); 
		$("#welcomeView").show();
	}
	this.showWelcomeScreen(); 

	this.showDishSelectScreen = function() { 
		//console.log("bajs");
		hideAllViews(); 
		$("#sidebar").show();
		$("#main-content").show();
	}

	this.showDishDetailsScreen = function() {
		// dishDetailsView.changeInfo();
		hideAllViews(); 
		$("#sidebar").show();
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


