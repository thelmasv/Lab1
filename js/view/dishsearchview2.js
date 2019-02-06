var DishSearch2 = function (container, model) { //index 4 + search dish 2 med pris alltså

	var getFullMenu = container.find("#getFullMenu");

	var allDishes = model.getAllDishes("main dish");

	var output = ""

	for (i in allDishes) {
		//console.log(allDishes[i].name);

		output +=  `<div class="col-8 col-md-2" id="foodCol2"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + `</p>
					</div>`;
	}

		container.html(`
		<div class="row">
			<div class="col-12" id="findDish">
				<h3>ADD ANOTHER DISH</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<form class="form-inline">
					<div class="search"> 
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



}




/* SÅHÄR SÅG DET UT FÖRST
	container.html (
				'<div class="row">' + 
					'<div class="col-12" id="findDish">' + 
						'<h3>ADD ANOTHER ONE</h3>' + 
					'</div>' + 
				'</div>' + 
				'<div class="row">' + 
					'<div class="col-12">' + 
						'<form class="form-inline">' + 
							'<div class="search">' + 
							  '<input type="text" placeholder="Enter keywords">' + 
						   '</div>' +
						   '<div class="form-group">' + 
						  	'<select class="form-control" id="exampleFormControlSelect1">' + 
								'<option>All</option>' + 
								'<option>Main Course</option>' + 
								'<option>Side Dish</option>' + 
								'<option>Dessert</option>' + 
								'<option>Appetizer</option>' + 
							'</select>' + 
						  '</div>' + 
						  '<button type="submit" id="button1">Search</button>' + 
						'</form>' + 
					'</div>' + 
				'</div>' + 
				'<div class="row">' + 
				'</div>' + 
				'<hr align="center">' + 
				'<div class="row">' + 
					'<div class="col-8 col-md-2" id="foodCol">' + 
						'<img src="meatballs.jpg" id="imgMain"/>' + 
						'<p id="imgMeat">Meatballs</p>' + 				
					'</div>' + 
					'<div class="col-8 col-md-2" id="foodCol">' + 
						'<img src="toast.jpg"/>' + 
						'<p id="imgToast">Toast</p>' + 
					'</div>' + 
					'<div class="col-8 col-md-2" id="foodCol">' + 
						'<img src="bakedbrie.jpg"/>' + 
						'<p id="imgBrie">Baked brie</p>' + 
					'</div>' + 
					'<div class="col-8 col-md-2" id="foodCol">' + 
						'<img src="icecream.jpg"/>' + 
						'<p id="imgIce">Icecream</p>' + 
					'</div>' + 
					'<div class="col-8 col-md-2" id="foodCol">' + 
						'<img src="sourdough.jpg"/>' + 
						'<p id="imgSour">Sourdough</p>' + 
					'</div>' + 
				'</div>' + 
				'<br><br><br><br><br>');


} */

