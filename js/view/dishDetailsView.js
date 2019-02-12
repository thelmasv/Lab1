var DishDetailsView = function (container, model, id) {
  this.goBackSearchButton = container.find("#GoBackButton");
  this.addToMenuButton = container.find("#buttonAdd");

  var numberOfGuestsTextField = container.find("#TotIngredients");
  var guestText = document.createElement("DIV");
  guestText.id = "ingTotPeople"; 
  guestText.innerHTML = "INGREDIENTS FOR " + model.getNumberOfGuests() + " PEOPLE";
  //Lägger till hela elementet i numberOfGuests-taggen
  numberOfGuestsTextField.append(guestText);

  // FUNKTION!!!
  // PGA DETTA SLUTAT FUNKA "go back button"
  this.changeInfo = function() {
    dishID = model.getId();
  
    var dishDetails = model.getDish(dishID); 
    let dishIngredients = dishDetails.ingredients;

    var outputIng = "";
    var sumDish = 0;

    // var numberPeople = model.getNumberOfGuests(); 
    // var id; 


  // Loopa igenom alla ingredienser och dess värden för vald dish
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
      // console.log(this.goBackSearchButton)
      this.addToMenuButton = container.find("#buttonAdd");

  } 

  

    this.update = function(model, changeDetails){
      if (changeDetails === 'numberOfGuests') {
        // ta in en bit html och ändra den

          dishID = model.getId();
  
          var dishDetails = model.getDish(dishID);

          // TAR INTE IN INGREDIENTS
          let dishIngredients = dishDetails.ingredients;

          var outputIng = "";
          var sumDish = 0;

          // var numberPeople = model.getNumberOfGuests(); 
          // var id; 


        // Loopa igenom alla ingredienser och dess värden för vald dish
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

        numberOfGuestsTextField.empty().append(`<div class="box" id="ingTotPeople">
          INGREDIENTS FOR ` + model.getNumberOfGuests() + ` PEOPLE
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
                  <p> ` + sumDish * model.getNumberOfGuests() + ` </p>  
                </div>

              </div>  
            </div> 
            <br> `);
        return changeDetails; 

      }

      this.goBackSearchButton = container.find("#GoBackButton");
      this.addToMenuButton = container.find("#buttonAdd");

    }

    model.addObserver(this.update);

}