var DishSearch2 = function (container, model) { //index 4, search dish 2
	
var getFullMenu = container.find("#getFullMenu");

	var allDishes = model.getAllDishes("main dish");

	var output = ""

	for (i in allDishes) {
		console.log(allDishes[i].name);

		output +=  `<div class="col-8 col-md-2" id="foodCol2"> 
						<img src="` + allDishes[i].image + `"/>
						<p> ` + allDishes[i].name + `</p>
					</div>`;

	}

	console.log(allDishes);


		container.html(`
		<div class="row">
			<div class="col-12" id="findDish">
				<h3>FIND A DISH</h3>
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




}

var SidebarView = function (container, model) { //VANLIGA SIDEBAR

	// Gör en variabel som letar upp taggen med id:t numberOfGuests
	var numberOfGuests = container.find("#numberOfGuests");

	//Skapar ett element av typ h5 (header 5) och lägger in texten "people: " + hämtar siffran från dinnerModel.
	var guestText = document.createElement("H5");
	guestText.innerHTML = "People: " + model.getNumberOfGuests();

	//Lägger till hela elementet i numberOfGuests-taggen
	numberOfGuests.append(guestText);

	var guestButtons = container.find("#guestButtons");

	var minusButtonElement = document.createElement("BUTTON");
	minusButtonElement.className = "btn btn-primary";
	minusButtonElement.innerHTML = "-";

	var plusButtonElement = document.createElement("BUTTON");
	plusButtonElement.className = "btn btn-primary";
	plusButtonElement.innerHTML = "+";

	guestButtons.append(minusButtonElement);
	guestButtons.append(" ");
	guestButtons.append(plusButtonElement);

	// Letar upp taggen som har id menuPrice
	var menuPrice = container.find("#menuPrice");

	// Skapar nya div-element med classname col-12
	var divCol12 = document.createElement("DIV");
	divCol12.className = "col-12";

	//Skapar en <p>-tagg med id "price"
	var paragraph = document.createElement("P");
	paragraph.id = "price";

	//hämtar priset från dinnermodel
	var price = model.getTotalMenuPrice();

	// kriver ut SEK: price i <p>-taggen
	paragraph.innerHTML = "SEK: " + price + ".00";

	// lägger in p-taggen i div-taggen
	divCol12.appendChild(paragraph);

	// lägger in hela div-taggen i elementet som har id "menuPrice"
	menuPrice.append(divCol12);
	
}
 

 




	 container.html( 
				 '<div class="row"> \
					<div class="col-6"> \
						<h4>My Dinner</h4> \
					</div> \
					<div class="col-6"> \
						<i class="fas fa-bars" id="hamburgerSymbol" data-toggle="collapse" data-target="#collapse" (MÅSTE REFERERA TLL ID></i> \
					</div> \
				 </div> \
				 <div id ="collapse"> \
				 <div class="row"> \
					<div class="col-6"> \
						<h5>People</h5> \
					</div> \
					<div class="col-6"> \
						<form> \
						<div class="form-group"> \
							<select class="form-control" id="exampleFormControlSelect1"> \
								<option>1</option> \
								<option>2</option> \
								<option>3</option> \
								<option>4</option> \
								<option>5</option> \
								<option>6</option> \
							</select> \
						</div> \
						</form> \
					</div> \
				 </div> \
					<div class="row" id="dish-name"> \
						<div class="col-6"> \
							<p>Dish name</p> \
						</div> \
						<div class="col-6"> \
							<p id="cost">Cost</p> \
						</div> \
					</div> \
					<div class="row" id="dinnerNamePriceChosen"> \
						<div class col-6>\
							<p id="dinnerNameChosen">Meatballs</p>\
						</div>\
						<div class="col-6"> \
							<p id="price">SEK 92.00</p> \
						</div> \
				 </div> \
				 <br>\
				 <div class="row"> \
					<div class="col-md-12" id="sidebarButton"> \
						<a href="index5.html"><button type="button" class="btn" id="button4" >Confirm Dinner</button></a> \
					</div> \
				</div> \
				</div>'); 

	
}
 



/*
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

