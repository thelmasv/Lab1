var ConfirmHeader = function (container, model) {

  container.html (`
        <div class="row" id="headerConfirmDinner">

          <div class="col-md-6" id="finalPeople">
            <h2 id="confirm">My Dinner: `+ model.getNumberOfGuests() + `  people</h2>
          </div>

          <div class="col-md-6" id="button5">
            <button type="button" class="btn" id="button1">Go back and edit dinner</button>
          </div>

        </div>
    <br><br>
	`); 

    this.goBackEditButton = container.find("#button1");

    //SKAPA UPDATE-FUNKTION??? för att uppdatera antal personer header 

}