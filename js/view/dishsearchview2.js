var DishSearch2 = function (container, model) {
	
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


}