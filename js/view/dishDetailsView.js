var DishDetailsView = function (container, model, id) {  //DENNA HAR INGEN } PÅ SLUTET, CONNECTAS INTE TILL DEN SISTA
  this.goBackSearchButton = container.find("#GoBackButton");
  //this.addToMenuButton = container.find("#buttonAdd");

<<<<<<< HEAD
  this.update = function(model, changeDetails){
    var numberOfGuestsTextField = container.find("#TotIngredients");
    var guestText = document.createElement("DIV");
    guestText.id = "ingTotPeople"; 
    // guestText.innerHTML = "INGREDIENTS FOR " + model.getNumberOfGuests() + " PEOPLE";
    numberOfGuestsTextField.append(guestText);

  // FUNKTION!!!PGA DETTA SLUTAT FUNKA "go back button"
  // GÅR LIKSOM INTE IN OCH HÄMTAR KNAPPARNA
    // this.changeInfo = function() {
    var dishID = model.getId();
    var dishDetails = model.getDish(dishID); 
=======
  this.getContainer = function (){ //här fixar vi så att bo back knappen funkar; vi tar in containern
    return container;
  }

  // den här tar in getId INNAN den uppdateras i mainContentController

          // just nu skapar en till box för varje adderat antal personer
    var numberOfGuestsTextField = container.find("#TotIngredients");

    var guestText = document.createElement("DIV");
    guestText.id = "ingTotPeople"; 
    // guestText.innerHTML = "INGREDIENTS FOR " + model.getNumberOfGuests() + " PEOPLE";

    //Lägger till hela elementet i numberOfGuests-taggen
    numberOfGuestsTextField.append(guestText);

  // FUNKTION!!!
  this.changeInfo = function() {
    dishID = model.getId();
  
    var dishDetails = model.getDish(dishID); //100 måste ändras --> ger meat balls varje gång då, måste vara dynamisk
  // var dishDetails = model.getDish(dishID);

>>>>>>> 139a3eabc83b4a62dd9233fa9cc63ce0639265b4
    let dishIngredients = dishDetails.ingredients;

    var outputIng = "";
    var sumDish = 0;

    // var numberPeople = model.getNumberOfGuests(); 
    // var id; 

<<<<<<< HEAD
    // Loopa igenom alla ingredienser och dess värden för vald dish
=======
  // Loopa igenom alla ingredienser och dess värden för vald dish
>>>>>>> 139a3eabc83b4a62dd9233fa9cc63ce0639265b4
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

<<<<<<< HEAD
      this.goBackSearchButton = container.find("#GoBackButton");
      console.log(this.goBackSearchButton); 
      this.addToMenuButton = container.find("#buttonAdd");
      console.log(this.addToMenuButton); 

      var goBackSearchButton = document.getElementById("GoBackButton"); 
=======
    

 // } 
    


    } 
   // this.changeInfo();

    this.update = function(model, changeDetails){
      if (changeDetails === 'numberOfGuests') {
        // ta in en bit html och ändra den

            dishID = model.getId();
  
          var dishDetails = model.getDish(dishID); //100 måste ändras --> ger meat balls varje gång då, måste vara dynamisk
        // var dishDetails = model.getDish(dishID);


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
>>>>>>> 139a3eabc83b4a62dd9233fa9cc63ce0639265b4

    }
    

    // knappen funkar inte!!!
    // this.addToMenuButton1 = container.find("#buttonAdd1"); 

    


    // göra så att när trycker på "add" så ska "confirm dinner" i sidebar inte längre vara disabled 
    // och så ska en ruta komma upp

   // this.currentDishId=1;

//   this.update = function(change) {
//     if(change == "numberOfGuests"){
//       this.loadDishDetailView(this.currentDishId);
//     }
//   }

//   model.addObserver(this);

//   this.loadDishDetailView(this.currentDishId);


// }

    model.addObserver(this.update);

<<<<<<< HEAD
    this.goBackSearchButton = container.find("#GoBackButton");
    this.addToMenuButton = container.find("#buttonAdd");

}
=======

     this.goBackSearchButton = container.find("#GoBackButton");
      //console.log(this.goBackSearchButton)
      this.addToMenuButton = container.find("#buttonAdd");
    }
>>>>>>> 139a3eabc83b4a62dd9233fa9cc63ce0639265b4
