var DishSearchView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
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
	var output = ""; 

	for (i = 0; i < allDishes.length; i++) { 

		output +=  `<div class="col-8 col-md-2 displayedDish" id="`+allDishes[i].id+`"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + `</p>
					</div>`;
    }

    $("#searchDishes").html( output );

    this.update = function( args ) {



		var type =  $('#exampleFormControlSelect1 :selected').val();
		var filter = "";

		if (args == "searchDish") {

			filter = $('#searchInput').val();

		}

		var allDishes = model.getAllDishes(type, filter);
		var output = "";

		for ( i = 0; i < allDishes.length; i++ ) { 

			output += `<div class="col-8 col-md-2 displayedDish" id="`+allDishes[i].id+`"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + `</p>
					</div>`;
	    }

	    $("#searchDishes").html(output);


	}

	this.searchButton = container.find("#button1");
	this.clickDish = container.find("#searchDishes"); 
	this.displayedDish = container.find(".displayedDish");

    model.addObserver(this.update);


}

