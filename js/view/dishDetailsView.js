var DishDetailsView = function (container, model, id) {  //DENNA HAR INGEN } PÅ SLUTET, CONNECTAS INTE TILL DEN SISTA
  this.goBackSearchButton = container.find("#GoBackButton");
  this.addToMenuButton = container.find("#buttonAdd");
  this.dish; 
  var dishIngredients;
  var self = this

  this.getContainer = function (){ //här fixar vi så att bo back knappen funkar; vi tar in containern
    return container;
  }

  function updateNumberOfGuests() {
    var ingredientAmount = container.find('.ingredient-amount')
    // console.log(ingredientAmount)
    for (var i = 0; i < ingredientAmount.length; i++) {
      // var amount = ingredientAmount[i].innerHTML.split(" ")[0]
      var unit = ingredientAmount[i].innerHTML.split(" ")[1] 
      // // console.log("amount: ", amount, "\nunit: ", unit)
      var newAmount = dishIngredients[i].amount*model.getNumberOfGuests()
      ingredientAmount[i].innerHTML = newAmount + " " + unit
    }

    var ingredientCost = container.find('.ingredient-cost')
    for (var i = 0; i < ingredientCost.length; i++) {
      // var cost = ingredientCost[i].innerHTML
      var newCost = 1*model.getNumberOfGuests()
      ingredientCost[i].innerHTML = newCost
    }

    var sumCost = container.find('.sum-cost')
    for (var i = 0; i < sumCost.length; i++) {
      // var sum = sumCost[i].innerHTML
      var newSum = Math.round(self.dish.pricePerServing*model.getNumberOfGuests())
      sumCost[i].innerHTML = newSum
    }


  }


  this.update = function(model, changeDetails){

    var numberOfGuestsTextField = container.find("#TotIngredients");
    var guestText = document.createElement("DIV");
    guestText.id = "ingTotPeople"; 
    // guestText.innerHTML = "INGREDIENTS FOR " + model.getNumberOfGuests() + " PEOPLE";
    numberOfGuestsTextField.append(guestText);

    var dishID = model.getId();

    if (changeDetails==="numberOfGuests") {
      updateNumberOfGuests();
      return
    }; 

    var dishDetails = model.getDish(dishID).then( dishDetails => {
      self.dish = dishDetails
      // console.log(self.dish); 
      dishIngredients = dishDetails.extendedIngredients;
        if (!dishIngredients) return; 

      if (!dishDetails) return; 
      // console.log(dishIngredients); 

      var guestText = document.createElement("DIV");
      guestText.id = "ingTotPeople"; 

      var outputIng = "";
      var sumDish = 0;

      // var numberPeople = model.getNumberOfGuests(); 
      // var id; 

      for (i = 0; i < dishIngredients.length; i++) { 

        outputIng += `<div class="row" id="Overview">
                      <div class="col-2">
                        <p class="ingredient-amount">`+ dishIngredients[i].amount + " " + dishIngredients[i].unit +`</p>
                      </div>
                      <div class="col-6">
                        <p>`+ dishIngredients[i].name +`</p>
                      </div>
                      <div class="col-1">
                        <p>SEK</p>
                      </div>
                      <div class="col-2">
                        <p class="ingredient-cost">1</p> 
                      </div>
                      </div>`

      }
    
      // sumDish = Math.round(dishDetails.pricePerServing);

      container.html(`

        <div class="row">
              <div class="col-12 col-md-6" id="dishDetailPic">
                <h3> ` + dishDetails.title + ` </h3>
                  <img src="` + dishDetails.image + `" style="width:248px;height:248px class="center"/>
                    <p id="img-text">` + dishDetails.instructions + ` </p> 
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
                      <p class="sum-cost"></p>  
                    </div>

                  </div>  
                </div> 
                <br> 

              </div> 
              </div>`);


        this.goBackSearchButton = container.find("#GoBackButton");
        this.addToMenuButton = container.find("#buttonAdd");
        updateNumberOfGuests()

        var goBackSearchButton = document.getElementById("GoBackButton");  
    });

    } 
    model.addObserver(this.update);

    this.goBackSearchButton = container.find("#GoBackButton");
    this.addToMenuButton = container.find("#buttonAdd");

}
