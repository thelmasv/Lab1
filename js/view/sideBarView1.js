var SidebarView = function (container, model) {

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
					<div class="row"> \
						<div class="col-12"> \
							<p id="price">SEK 0.00</p> \
						</div> \
				 </div> \
				 <div class="row"> \
					<div class="col-md-12" id="sidebarButton"> \
						<a href="index2.html"><button type="button" class="btn" id="button2" disabled>Confirm Dinner</button></a> \
					</div> \
				</div>');
	
}
 
