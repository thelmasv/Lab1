var SidebarView = function (container, model) {

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
 
