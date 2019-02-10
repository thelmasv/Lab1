var DishSearchView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.getFullMenu = container.find("#id");

	var allDishes = model.getAllDishes(output); //får ut alla rätter på förstasidan("all")
	allDishes.id = "searchDishes"; 

	//var allDishesHtml = "";
	var output = ""

	for (i = 0; i < allDishes.length; i++) { 

		output +=  `<div class="col-8 col-md-2" id="d`+i+`"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + `</p>
					</div>`;
    }

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

		<div class="row" id="searchDishes">

			` + output + `
			
		</div>`);





	// this.container = container; 
	this.nextPage = container.find("#d"+i+"");
	this.search = container.find("#button1"); 
	this.clickDish = container.find("#searchDishes"); 

	this.update = function(model, changeDetails){
		return changeDetails;
	}

    model.addObserver(this.update);

	this.searchbutton = container.find("#button1");

}

