var SidebarView = function (container, model) {

	container.html(`
			 <div class="row">
	          <div class="col-12">
	            <h4>My Dinner</h4>
	          </div>
	         </div>

	         <div class="row"> 
	          <div class="col-4">
	          	<h5 id="numGuests"></h5>
	          </div>
	          <div class="col-8" id="guestButtons"> 
	          </div>
	         </div>

	         <br>
	          <div class="row" id="dish-name">
	            <div class="col-6">
	              <p>Dish name</p>
	            </div>
	            <div class="col-6">
	              <p id="cost">Cost</p>
	            </div>
	          </div>

	          <div class="row">
	          	<p id="addBox"></p>
	          </div>

	          <div class="row" id="menuPrice">
	         </div>
	         <div class="row">
	          <div class="col-md-12" id="sidebarButton">
	            <button type="button" class="btn" id="button2" >Confirm Dinner</button>
	          </div>
	        </div>`
		)

	this.theGetNumberOfGuests = function() {
		return model.getNumberOfGuests(); 
	}

	this.theGetTotalMenuPrice = function() {
		return model.getTotalMenuPrice(); 
	}

	// ta bort 100, men implementera ingredients på annat sätt 
	var dishDetails = model.getDish(100);
	let dishIngredients = dishDetails.ingredients;
	var sumDish = 0; 

	var numberOfGuestsTextField = container.find("#numGuests");
	var price = model.getTotalMenuPrice();

	var guestButtons = container.find("#guestButtons");

	this.minusButtonElement = document.createElement("BUTTON");
	this.minusButtonElement.className = "btn btn-primary";
	this.minusButtonElement.id = "minusButton"; 
	this.minusButtonElement.innerHTML = "-";

	this.plusButtonElement = document.createElement("BUTTON");
	this.plusButtonElement.className = "btn btn-primary";
	this.plusButtonElement.id = "plusButton";
	this.plusButtonElement.innerHTML = "+";

	guestButtons.append(this.minusButtonElement);
	guestButtons.append(" ");
	guestButtons.append(this.plusButtonElement);

	this.confirmButton = container.find("#button2");

	//Skapar ett element av typ h5 (header 5) och lägger in texten "people: " + hämtar siffran från dinnerModel.
	var guestText = document.createElement("H5");
	guestText.id = "numGuests"; 
	guestText.innerHTML = "People: " + model.getNumberOfGuests();

	//Lägger till hela elementet i numberOfGuests-taggen
	numberOfGuestsTextField.append(guestText);


	// Skapar nya div-element med classname col-12
	var divCol12 = document.createElement("DIV");
	divCol12.className = "col-12";

	//Skapar en <p>-tagg med id "price"
	var paragraph = document.createElement("P");
	paragraph.id = "price";

	var menuPrice = container.find("#menuPrice");

	this.totMenuPrice = function() {
		menuPrice.append(this.theGetTotalMenuPrice() * this.theGetNumberOfGuests()); 
	}

	this.totNumberOfGuests = function() {
		numberOfGuestsTextField.append(this.theGetNumberOfGuests()); 
	}

	var addMenu = container.find("#addBox"); 
	var addText = document.createElement("P");
	addText.id = "addBox"; 
	// addText.innerHTML = "Dish";
	addMenu.append(addText); 

	sumDish = model.getDishPrice(dishIngredients) * model.getNumberOfGuests();

	paragraph.innerHTML = "SEK: " + model.getTotalMenuPrice();		//PRISET SKA VARA DYNAMISKT

	// lägger in p-taggen i div-taggen
	divCol12.appendChild(paragraph);

	// lägger in hela div-taggen i elementet som har id "menuPrice"
	menuPrice.append(divCol12);

	this.update = function(model, changeDetails) {
     	if (changeDetails == 'numberOfGuests' || changeDetails == 'menu') {
     		numberOfGuestsTextField.text("People: " + model.getNumberOfGuests());

     		var getMenu = model.getFullMenu();
     		var i; 
     		var x = ""; 

     		for (i = 0; i < getMenu.length; i++) {
     			x += "<br><div> " + getMenu[i].name; + "</div>"
				let dishIngredients = getMenu[i].ingredients;
				var sumDish = model.getDishPrice(dishIngredients) * model.getNumberOfGuests();
     			x += "<div class='dish-price'> SEK: " + sumDish + "</div> "
     		}
     		
     		addMenu.html(x); 
     		paragraph.innerHTML = "SEK: " + model.getTotalMenuPrice() * model.getNumberOfGuests();
   			return changeDetails; 
     	}
	}

	model.addObserver(this.update); 
	
}