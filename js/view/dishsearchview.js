var DishSearchView = function (container, model) {

	var getFullMenu = container.find("#getFullMenu");

	var allDishes = model.getAllDishes("main dish");

	//var getDishes = model.getAllDishes("search");

	var output = ""

	for (i in allDishes) {
		// console.log(allDishes[i].name);

		output +=  `<div class="col-8 col-md-2" id="foodCol2"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + `</p>
					</div>`;
	}

		container.html(`
		<div class="row">
			<div class="col-12" id="findDish">
				<h3>FIND A DISH</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<form class="form-inline">
					<div class="search" id="searchbutton"> 
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
				</form>
			</div>
		</div>
		<div class="row">
		</div>
		<hr align="center">

		<div class="row">

			` + output +`
			
		</div>`);


	this.nextPage = container.find("#foodCol2");
	//this.search = container.find("#searchbutton");


}
