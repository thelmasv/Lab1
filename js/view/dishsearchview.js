var DishSearchView = function (container, model) {
	
	this.getContainer = function (){ //här fixar vi så att bo back knappen funkar; vi tar in containern
	  return container;
	}
	this.container = container; 
	this.searchButton = container.find("#button1");
	this.clickDish = container.find("#searchDishes"); 
	this.displayedDish = container.find(".displayedDish");
	this.searchByName = container.find("#searchInput");
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

// .hide() & .show() 
// LÄGG TILL LYSSNARE

  	container.html ( `
		<div class="row">
			<div class="col-12" id="findDish">
				<h3>FIND A DISH</h3>
			</div>
		</div>

		<div class="row">
			<div class="col-12">
				
					<div class="search"> 
					  <input id="searchInput" type="text" placeholder="Enter keywords">
				   </div>
				  <div class="form-group">
				  	<select class="form-control" id="exampleFormControlSelect1">
						<option selected>All</option>
						<option>Starter</option>
						<option>Main Dish</option>
						<option>Dessert</option>
					</select>
				  </div>
				  
				 <button type="submit" id="button1">Search</button>
					
			</div>
		</div>

		<div class="row">
		</div>
		<hr align="center">

		<div class="row" id="searchDishes">
			
		</div>`);

	var allDishes = model.getAllDishes("All"); //får ut alla rätter på förstasidan("all")
	var output = ""

	for (i = 0; i < allDishes.length; i++) { 
		output +=  `<div class="col-8 col-md-2 displayedDish" id="`+allDishes[i].id+`"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + ` </p>
					</div>`;
	}

	$("#searchDishes").html( output );

    this.update = function( args ) {
		this.getContainer = function (){ //här fixar vi så att bo back knappen funkar; vi tar in containern
		  return container;
		}

		// output.empty(); 
		// this.
		//empty output 

		var type =  $('#exampleFormControlSelect1 :selected').val();
		var filter = "";

		var type =  $('#exampleFormControlSelect1').val();
		var filter = $('#searchInput').id; 

		if (args == "searchDish") {
			filter = $('#searchInput').val();
		}

	  	container.html ( `
			<div class="row">
				<div class="col-12" id="findDish">
					<h3>FIND A DISH</h3>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					
						<div class="search"> 
						  <input id="searchInput" type="text" placeholder="Enter keywords">
					   </div>
					  <div class="form-group">
					  	<select class="form-control" id="exampleFormControlSelect1">
							<option selected>All</option>
							<option>Starter</option>
							<option>Main Dish</option>
							<option>Dessert</option>
						</select>
					  </div>
					  
					 <button type="submit" id="button1">Search</button>
						
				</div>
			</div>

			<div class="row">
			</div>
			<hr align="center">

			<div class="row" id="searchDishes">
			</div><br>`);

		var allDishes = model.getAllDishes(type, filter);
		var output = "";

		for ( i = 0; i < allDishes.length; i++ ) { 

			output += `<div class="col-8 col-md-2 displayedDish" id="`+allDishes[i].id+`"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + `</p>
					</div>`;
	    }

	    console.log(allDishes); 

	    $('#searchDishes').html(output);

	    // if ($('#searchDishes')) {
	    // 	$('#searchDishes').html(output);
	    // }

	this.searchButton = container.find("#button1");
	this.clickDish = container.find("#searchDishes"); 
	this.displayedDish = container.find(".displayedDish");
	this.searchByName = container.find("#searchInput");

    // var searchButton = document.getElementById("button1");     
    // var clickDish = document.getElementById("searchDishes"); 
    // var searchByName = document.getElementById("searchInput"); 
    // var displayedDish = document.getElementsByClassName("displayedDish"); 
	// var displayedDish = $(".displayedDish"); 

	}

	this.searchButton = container.find("#button1");
	this.clickDish = container.find("#searchDishes"); 
	this.displayedDish = container.find(".displayedDish");
	this.searchByName = container.find("#searchInput");

    model.addObserver(this.update);


}