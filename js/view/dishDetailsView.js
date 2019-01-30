var DishDetailsView = function (container, model) {
  
  var dishDetails = model.getDish(100);
 

  let dishIngredients = dishDetails.ingredients;

  // console.log(dishIngredients);
  // console.log(dishIngredients[i]);
  // console.log(dishIngredients[0].name);

  // console.log(dishIngredients.length);

  var outputIng = ""; 
  var sumDish = 0; 

  // model.getDishPrice(ingredientDishList);

// Loopa igenom alla ingredienser och dess värden för vald dish
  for (i = 0; i < dishIngredients.length; i++) { 
    // console.log(dishIngredients[i].name);

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
                  // sumDish += dishIngredients[i].price * model.getNumberOfGuests(); 

  }

sumDish = model.getDishPrice(dishIngredients) * model.getNumberOfGuests();


  container.html(`

		<div class="row">
          <div class="col-12 col-md-6" id="dishDetailPic">
            <h3> ` + dishDetails.name + ` </h3>
              <img src="` + dishDetails.image + `" style="width:248px;height:248px class="center"/>
                <p id="img-text">` + dishDetails.description + ` </p> 
                <a id="GoBackButton" href="index2" class="previous">&laquo; Go back to search</a>
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

}