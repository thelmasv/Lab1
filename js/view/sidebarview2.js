var SidebarView2 = function (container, model) {

	container.html( 
				 '<div class="row"> \
					<div class="col-12"> \
						<h4>My Dinner</h4> \
					</div> \
				 </div> \
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
				</div>');
	
}
 
