var ConfirmHeader = function (container, model) {

  container.html (`
        <div class="row" id="headerConfirmDinner">

          <div class="col-md-6" id="finalPeople">
            <h2>My Dinner: `+ model.getNumberOfGuests() + `  people</h2>
          </div>

          <div class="col-md-6" id="button5">
            <a href="index4.html"><button type="button" class="btnw3" id="button1">Go back and edit dinner</button></a>
          </div>

        </div>
    <br><br>`
	)


}