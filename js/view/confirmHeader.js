var ConfirmHeader = function (container, model) {

  container.html (`
        <div class="row" id="headerConfirmDinner">

          <div class="col-md-6" id="finalPeople">
            <h2 id="confirm"></h2>
          </div>

          <div class="col-md-6" id="button5">
            <button type="button" class="btn" id="button1">Go back and edit dinner</button>
          </div>

        </div>
    <br><br>
	`); 

    var numberOfGuestsTextField = container.find("#confirm");

    var guestText = document.createElement("H2");
    guestText.id = "confirm"; 
    guestText.innerHTML = "My Dinner: " + model.getNumberOfGuests() + " people";

    //Lägger till hela elementet i numberOfGuests-taggen
    numberOfGuestsTextField.append(guestText);

    this.update = function(model, changeDetails){
      if (changeDetails === 'numberOfGuests') {
        // ta in en bit html och ändra den
        numberOfGuestsTextField.text("My Dinner: " + model.getNumberOfGuests() + " people"); 
        return changeDetails; 

      } 

    } 
    model.addObserver(this.update);

    this.goBackEditButton = container.find("#button1");

}