var DishSearchView = function (container, model) {
	
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

		// output +=  `<div class="col-8 col-md-2" id="d`+i+`"> 
		// 				<a href="dish+d` + allDishes[i].id + `"><img src="` + allDishes[i].image + `"/>
		// 				<p> ` + allDishes[i].name + `</p></a>
		// 			</div>`;

		// output +=  `<div class="col-8 col-md-2" id="`+allDishes[i].id+`"> 
		// 				<img src="` + allDishes[i].image + `" onclick="` + allDishes[i].id + `"/>
		// 				<p> ` + allDishes[i].name + `</p>
		// 			</div>`;

		output +=  `<div class="col-8 col-md-2 displayedDish" id="`+allDishes[i].id+`"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + ` </p>
					</div>`;


<<<<<<< HEAD
    this.update = function( args ) {
		var type =  $('#exampleFormControlSelect1 :selected').val();
		var filter = "";

		var type =  $('#exampleFormControlSelect1').val();
		var filter = $('#searchInput').id; 

		if (args == "searchDish") {
			filter = $('#searchInput').val();
=======
		// this.yo = container.find("#" + allDishes[i].id + "");

    }

    $("#searchDishes").html( output );

    this.update = function( args ) {

		var type =  $('#exampleFormControlSelect1').val();
		var filter = $('#searchInput').id; // "";
		//console.log("hej");

		if (args == "searchDish") {

			filter = $('#searchInput').type;

>>>>>>> 139a3eabc83b4a62dd9233fa9cc63ce0639265b4
		}
		var allDishes = model.getAllDishes(type, filter);

		var output = "";
		// var setTheId = model.setId(); 


		for ( i = 0; i < allDishes.length; i++ ) { 

			// console.log("dish.name: "+allDishes[i].name);
			output += `<div class="col-8 col-md-2 displayedDish" id="`+allDishes[i].id+`"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + `</p>
					</div>`;
	    }

	    $('#searchDishes').html(output);

	}

	this.searchButton = container.find("#button1");
	this.clickDish = container.find("#searchDishes"); 
	this.displayedDish = container.find(".displayedDish");
	this.searchByName = container.find("#searchInput");

    model.addObserver(this.update);


}

