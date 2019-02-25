var DishDetailsView = function (container, model, id) {  //DENNA HAR INGEN } PÅ SLUTET, CONNECTAS INTE TILL DEN SISTA
  this.goBackSearchButton = container.find("#GoBackButton");
  this.addToMenuButton = container.find("#buttonAdd");
  this.dish

  this.getContainer = function (){ //här fixar vi så att bo back knappen funkar; vi tar in containern
    return container;
  }

  this.update = function(model, changeDetails){

    var numberOfGuestsTextField = container.find("#TotIngredients");
    var guestText = document.createElement("DIV");
    guestText.id = "ingTotPeople"; 
    // guestText.innerHTML = "INGREDIENTS FOR " + model.getNumberOfGuests() + " PEOPLE";
    numberOfGuestsTextField.append(guestText);

    var dishID = model.getId();
    var self = this
    var dishDetails = model.getDish(dishID).then( dishDetails => {
      self.dish = dishDetails
    });

    if (!dishDetails) return; 
    let dishIngredients = dishDetails.ingredients;


    var guestText = document.createElement("DIV");
    guestText.id = "ingTotPeople"; 

    var outputIng = "";
    var sumDish = 0;

    // var numberPeople = model.getNumberOfGuests(); 
    // var id; 

    for (i = 0; i < dishIngredients.length; i++) { 

      outputIng += `<div class="row" id="Overview">
                    <div class="col-2">
                      <p>`+ Math.round(dishIngredients[i].quantity * model.getNumberOfGuests()) + dishIngredients[i].unit +`</p>
                    </div>
                    <div class="col-6">
                      <p>`+ dishIngredients[i].name +`</p>
                    </div>
                    <div class="col-1">
                      <p>SEK</p>
                    </div>
                    <div class="col-2">
                      <p>`+ Math.round(dishIngredients[i].price * model.getNumberOfGuests()) +`</p> 
                    </div>
                    </div>`

    }
  
    sumDish = model.getDishPrice(dishIngredients) * model.getNumberOfGuests();

    container.html(`

      <div class="row">
            <div class="col-12 col-md-6" id="dishDetailPic">
              <h3> ` + dishDetails.name + ` </h3>
                <img src="` + dishDetails.image + `" style="width:248px;height:248px class="center"/>
                  <p id="img-text">` + dishDetails.description + ` </p> 
                  <button type="button" class="btn previous" id="GoBackButton">&laquo; Go back to search</button>

            </div>    

            <div class="col-12 col-md-6" id="TotIngredients"> 
              <div class="box" id="ingTotPeople">INGREDIENTS FOR ` + model.getNumberOfGuests() + ` PEOPLE

              <hr>

              ` + outputIng + `   

                <div class="row">
                  <div class="col-12">
                    <hr>     
                  </div> 
                </div>

                <div class="row">

                  <div class="col-6">
                    <button type="button" class="btn" id="buttonAdd">Add to menu</button>
                  </div>

                  <div class="col-3" id="boxSum">
                    <p>SEK</p>
                  </div>

                  <div class="col-3" id="boxSum">
                    <p> ` + sumDish + ` </p>  
                  </div>

                </div>  
              </div> 
              <br> 

            </div> 
            </div>`);

      this.goBackSearchButton = container.find("#GoBackButton");
      this.addToMenuButton = container.find("#buttonAdd");

      var goBackSearchButton = document.getElementById("GoBackButton");     

    } 
    model.addObserver(this.update);

    this.goBackSearchButton = container.find("#GoBackButton");
    this.addToMenuButton = container.find("#buttonAdd");

}
