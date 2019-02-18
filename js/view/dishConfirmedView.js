var DishConfirmedView = function (container, model) {

  // knappen har slutat funka

  this.getContainer = function (){ //här fixar vi så att bo back knappen funkar; vi tar in containern
    return container;
  }
  this.printButton = container.find("#button1");

  this.update = function(model, changeDetails) {
    var menuList = []; 
    var chosenMenu = model.getCurrentMenu(); 
    console.log(chosenMenu); // printar ut tom lista []

    var confirmedDishes = ""

    var sumDish = 0; 
    var outputConfirmed = ""; 
    var totalMenuPrice = model.getTotalMenuPrice(chosenMenu[i]); 

    for (i = 0; i < chosenMenu.length; i++) {
      var confirmedDishes = model.getDish(chosenMenu[i]); 
      outputConfirmed += `<div class="col-md-12" id="confirmedPic">
                          <div>
                            <img src="` + confirmedDishes.image + `" id="imgMain"/> 
                            <p>` + confirmedDishes.name + `</p>
                            <p id="price">SEK ` +  model.getDishPrice(confirmedDishes.ingredients) * model.getNumberOfGuests() + `</p>
                          </div>


                        </div>` 

    }
    // säger undefined om confirmedDishes.image eller .name

    container.html( `
        <div class="row">

          <div class="col-md-12">
          </div>

          ` + outputConfirmed + ` 

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

    // if (changeDetails == 'menu') {
    //   return changeDetails; 
    // }

  }

  model.addObserver(this.update); 

  this.printButton = container.find("#button1");


}