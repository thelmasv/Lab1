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
          <div class="row" id="menuPrice">
         </div>
         <div class="row">
          <div class="col-md-12" id="sidebarButton">
            <button type="button" class="btn" id="button2" disabled>Confirm Dinner</button>
          </div>
        </div>`
	)

	// Gör en variabel som letar upp taggen med id:t numberOfGuests
	var numberOfGuestsTextField = container.find("#numGuests");

	//Skapar ett element av typ h5 (header 5) och lägger in texten "people: " + hämtar siffran från dinnerModel.
	var guestText = document.createElement("H5");
	guestText.id = "numGuests"; 
	guestText.innerHTML = "People: " + model.getNumberOfGuests();

	//Lägger till hela elementet i numberOfGuests-taggen
	numberOfGuestsTextField.append(guestText);

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
	// console.log(this.plusButtonElement)

	// Letar upp taggen som har id menuPrice
	var menuPrice = container.find("#menuPrice");

	// Skapar nya div-element med classname col-12
	var divCol12 = document.createElement("DIV");
	divCol12.className = "col-12";

	//Skapar en <p>-tagg med id "price"
	var paragraph = document.createElement("P");
	paragraph.id = "price";

	//hämtar priset från dinnermodel
	// var price = model.getTotalMenuPrice();

	// HÄR SKA DET KOMMA UPP RUTA SOM GÖMMER SIG OM INTE FINNS NÅGOT I MENY (SIDEBAR2)

	// kriver ut SEK: price i <p>-taggen
	paragraph.innerHTML = "SEK: 0.00";		//PRISET SKA VARA DYNAMISKT

	// lägger in p-taggen i div-taggen
	divCol12.appendChild(paragraph);

	// lägger in hela div-taggen i elementet som har id "menuPrice"
	menuPrice.append(divCol12);

	this.update = function(model, changeDetails) {
		// redraw just the portion affected by the changeDetails
     	// or remove all graphics in the view, read the whole model and redraw 

     	if (changeDetails == 'numberOfGuests') {
     		numberOfGuestsTextField.text("People: " + model.getNumberOfGuests()); 
     		return changeDetails; 
     	}

     	if (changeDetails == 'menu') {
     		// ??? (update menu)
     	}
	}

	model.addObserver(this.update);

	
}