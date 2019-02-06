var DishDetailsView = function (container, model) {
  
  var dishDetails = model.getDish(100);
 

  let dishIngredients = dishDetails.ingredients;

  var outputIng = ""; 
  var sumDish = 0; 


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
                <a id="GoBackButton"  class="previous">&laquo; Go back to search</a>
          </div>  

          <div class="col-12 col-md-6" id="TotIngredients"> 
            <div class="box">INGREDIENTS FOR ` + model.getNumberOfGuests() + ` PEOPLE

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


    this.goBack = container.find("#GoBackButton"); //this.vaddenkalladesicontroller = container.find("vad id:et kallas här")
    this.addToMenu = container.find("#buttonAdd");


}