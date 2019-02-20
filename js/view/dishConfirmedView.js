var DishConfirmedView = function (container, model) {

  this.getContainer = function (){ //här fixar vi så att bo back knappen funkar; vi tar in containern
    return container;
  }
  this.printButton = container.find("#button1");

  this.update = function(model, changeDetails) {
    var menuList = []; 
    var chosenMenu = model.getCurrentMenu(); 
    var confirmedDishes = "";

    var outputConfirmed = ""; 

    var sumDish = 0; 
    var totalMenuPrice = model.getTotalMenuPrice(chosenMenu[i]); 

    for (var i = 0; i < chosenMenu.length; i++) {
      var confirmedDishes = model.getDish(chosenMenu[i]); 
      outputConfirmed += `<div class="col-md-3" id="confirmedPic">
                            <div class="row">
                              <img src="` + confirmedDishes.image + `" id="imgMain"/> 
                            </div>
                            <div class="row">
                              <p>` + confirmedDishes.name + `</p>
                            </div>
                            <div class="row">
                              <p id="price">SEK ` +  model.getDishPrice(confirmedDishes.ingredients) * model.getNumberOfGuests() + `</p>
                            </div>
                          </div>`; 

    }

    container.html( `
        <div class="row">
          <div class="col-md-12">
            ` + outputConfirmed + ` 
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <p id="confirmPrice">TOTAL:</p>
            <p id="confirmPrice">SEK `+ totalMenuPrice * model.getNumberOfGuests() +`</p>
          </div>
        </div>

        <hr>
        <div class="container-fluid">
          <div class="row" id="buttonPrint">
            <div class="col-md-12" id="first-page-col">
              <button type="button" class="btnw3" id="button1">Print Full Recipe</button>
            </div>
          </div>
        </div>`
  		)

    this.printButton = container.find("#button1");

  }

  model.addObserver(this.update); 

  this.printButton = container.find("#button1");


}