var DishConfirmedView = function (container, model) {

  var menuList = []; 
  var chosenMenu = model.getFullMenu(); 

  var confirmedDishes = ""

  var sumDish = 0; 
  var outputConfirmed = ""
  var totalMenuPrice = model.getTotalMenuPrice(chosenMenu[i]); 

  for (i in chosenMenu) {
    confirmedDishes = model.getDish(chosenMenu[i]); 
    outputConfirmed += `<div class="col-8 col-md-2">
                        <div id="foodCol">
                          <img src="` + confirmedDishes.image + `" id="imgMain"/> 
                          <p>` + confirmedDishes.name + `</p>
                        </div>

                        <div>
                          <p id="price">SEK ` +  model.getDishPrice(confirmedDishes.ingredients) * model.getNumberOfGuests() + `</p>
                        </div>
                      </div>` 
  }
  // console.log(outputConfirmed)



  container.html( `
      <div class="row">

        <div class="col-md-2">
        </div>

        ` + outputConfirmed + ` 

        <div class="col-md-2">
          <br><br><br><br>
          <p id="price">TOTAL:</p>
          <p id="price">SEK `+ totalMenuPrice * model.getNumberOfGuests() +`</p>
        </div>
      </div>

      <hr>
      <div class="container-fluid">
        <div class="row" id="buttonPrint">
          <div class="col-md-12" id="first-page-col">
            <button type="button" class="btnw3" id="button1">Print Full Recipe</button>
          </div>
        </div>
      </div>

`
		)

    this.printButton = container.find("#button1");



}