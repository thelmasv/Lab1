$(function() {
	//We instantiate our model
	var model = new DinnerModel();

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
	var sidebarController = new SidebarController(sidebarView, model, this); 

	var welcomeController = new WelcomeController(exampleView, model, this); //tar in motsvarande var, model och view
	var mainContentController = new MainContentController(dishSearchView, model, this);  
 
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

	hideAllViews(); //här kallar vi på hideAllViews

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
	this.showDishSelectScreen();

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


/* $(function() {
		var sidebarView = new SidebarView($("#sidebar"), model)
		var SidebarViewController = new SidebarViewController(sidebarView, model, this)

		var hideAllViews = function() { //allt som ska hideas vid sidebar
			dishSearchView.hide();
			dishSearchView2.hide();
			dishItemView.hide();
			dishDetailsView.hide();
			dishConfirmedView.hide();
			dinnerprintout.hide();
			confirmHeader.hide(); */

		var hideAllViews = function() { //här gör vi en funktion som kan hidea viewsen
			$("#welcomeView").hide();
			$("#sidebar").hide();
			$("#main-content").hide();
			$("#sidebar2").hide();
			$("#foodCol").hide();
			$("#main-content2").hide();
			$("#main-content3").hide();
			$("#main-content4").hide();
			$("#main-content5").hide();
			$("#confirmHead").hide();


		this.showExampleViewScreen = function() { //här gör vi en funktion som kna showa en specifik view
			hideAllViews();
			$("#welcomeView").show();
		}

		this.showSidebarViewScreen = function() {
			hideAllViews();
			$("#sidebar").show();

		}

		this.showDishSearchViewScreen = function(){
			hideAllViews();
			$("#main-content").show();
		}

		this.showSidebarView2Screen = function(){
			hideAllViews();
			$("#sidebar2").show();
		}

		this.showDishItemViewScreen = function() {
			hideAllViews();
			$("#foodCol").show();
		}

		this.showDishSearch2Screen = function() {
			hideAllViews();
			$("#main-content2").show();
		}

		this.DishDetailsViewScreen = function() {
			hideAllViews();
			$("#main-content3").show();
		}

		this.showDishConfirmedViewScreen = function() {
			hideAllViews();
			$("#main-content4").show();
		}

		this.DinnerPrintout = function() {
			hideAllViews();
			$("#main-content5").show();
		}

		this.ConfirmHeaderScreen = function() {
			hideAllViews();
			$("#confirmHead").show();
		}

}

});

		


/*  model.addDishToMenu("1");
    model.addDishToMenu("100");
    model.addDishToMenu("101");
	model.setNumberOfGuests(3); */

	// showDishDetailsScreen($"dishDetailsView", "sidebarView") //function that will show dish details view and sidebar view (or which ever views are on that screen in your implementation) and hide the other views.
	
	/*var SidebarViewController = function(view, model, app) {
		view.confirmButton.click(function(){
			app.confirmedDinner();
		})
	} */
	
	// FÖR SIDEBAR
	/*$(function() {
		var sidebarView = new SidebarView($("#sidebar"), model)
		var SidebarViewController = new SidebarViewController(sidebarView, model, this)

		var hideAllViews = function() { //allt som ska hideas vid sidebar
			dishSearchView.hide();
			dishSearchView2.hide();
			dishItemView.hide();
			dishDetailsView.hide();
			dishConfirmedView.hide();
			dinnerprintout.hide();
			confirmHeader.hide();
		
		}

		this.showConfirmScreen = function(){
			hideAllViews();
			confirmView.show();
		}
	})*/ 


	// And create the instance of ExampleView});