/*var DishSearchView = function (container, model) {

	var getFullMenu = container.find("#getFullMenu");

	var allDishes = model.getAllDishes("main dish");

	//var filter = model.getAllDishes("");

	var searchDishByName = model.getAllDishes("getAllDishes");

	this.getAllDishes = container.find(".getAllDishes");

	//var getDishes //= model.getAllDishes(); //kan söka på name
	//input = document.getDishes(filter.name);

	this.model = function(filter){
		var menu = model.getAllDishes(filter)
	}

	var output = ""

	for (name in searchDishByName) {
		 	
		output +=  `<div class="col-8 col-md-2" id="foodCol2"> 
					<img src="` + allDishes[name].image + `"/>
					<p> ` + allDishes[name].name + `</p>
				</div>`;
	}
	
*/

var DishSearchView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.getFullMenu = container.find("#id");

	var allDishes = model.getAllDishes(output); //får ut alla rätter på förstasidan("all")

	//var allDishesHtml = "";
	var output = ""

	for (i = 0; i < allDishes.length; i++) { 

		output +=  `<div class="col-8 col-md-2" id="foodCol2"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + `</p>
					</div>`;
    }

    this.searchFilter = container.find("#filter");



  /*  var searchDishByName = this.


    if (searchDishByName === model.filter){
    	return dishes.id;
    }
*/


    //if (searchDishByName == model.filter);
    //	return true;
	
	//this.allDishes.html(output);



/*	var output = ""

	for (i in allDishes) { //GÖR EN METOD SOM HAR ATTRIBUT FÖR FILTER/TYPE
		// console.log(allDishes[i].name);

		output +=  `<div class="col-8 col-md-2" id="foodCol2"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + `</p>
					</div>`;
	}*/

		container.html ( `
		<div class="row">
			<div class="col-12" id="findDish">
				<h3>FIND A DISH</h3>
			</div>
		</div>

		<div class="row">
			<div class="col-12">
				
					<div class="search" id="button1"> 
					  <input type="text" placeholder="Enter keywords">
				   </div>
				  <div class="form-group">
				  	<select class="form-control" id="exampleFormControlSelect1">
						<option>All</option>
						<option>Main Course</option>
						<option>Side Dish</option>
						<option>Dessert</option>
						<option>Appetizer</option>
					</select>
				  </div>
				  
				 <button type="submit" id="button1">Search</button>
					
			</div>
		</div>

			

		<div class="row">
		</div>
		<hr align="center">

		<div class="row">

			` + output + `
			
		</div>`);


	this.nextPage = container.find("#foodCol2");
	this.searchbutton = container.find("#button1");
	//this.getMain = container.find("#exampleFormControlSelect1");
	//this.getStarter = container.find("#exampleFormControlSelect1");

}

