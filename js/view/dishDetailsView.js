var DishDetailsView = function (container, model) {
  
  var dishDetails = model.getDish(100);
 

  let dishIngredients = dishDetails.ingredients;


  // vi vill ha ut den maträtt vi tryckt in (meatballs)

  //var är sidebar??? den som heter view1
  // hur loopa ingredienser???


  console.log(dishIngredients);
  console.log(dishIngredients[i]);
  console.log(dishIngredients[0].name);

  console.log(dishIngredients.length);

  var outputIng = ""


  for (i = 0; i < dishIngredients.length; i++) { 
    console.log(dishIngredients[i].name);

    outputIng += `
            <div class="row" id="Overview"> 
              <div class="col-2"> 
                <p>` + dishIngredients[i].quantity + dishIngredients[i].unit + `</p> 
              </div>
              <div class="col-7"> 
                <p>`+ dishIngredients[i].name +`</p>
              </div>
              <div class="col-1">
                <p>SEK</p> 
              </div>
              <div class="col-2">
                <p>` + dishIngredients[i].price + `</p> 
              </div>`

  }

  // for (i in allDishes) {
  //   console.log(allDishes[i].name);

  //   output +=  `<div class="col-8 col-md-2" id="foodCol2"> 
  //           <img src="` + allDishes[i].image + `"/>
  //           <p> ` + allDishes[i].name + `</p>
  //         </div>`;
  //}

  // - get information
  // - create HTML

  container.html(`

		<div class="row">

   
          <div class="col-12 col-md-6" id="dishDetailPic">
            <h3> ` + dishDetails.name + ` </h3>
              <img src="` + dishDetails.image + `" style="width:298px;height:298px;"/>
                <p id="img-text">` + dishDetails.description + ` </p> 
                <a id="GoBackButton" href="index2" class="previous">&laquo; Go back to search</a>
          </div>  

          <div class="col-12 col-md-6" id="TotIngredients"> 
            <div class="box">INGREDIENTS FOR ` + model.getNumberOfGuests() + ` PEOPLE

            <hr>

            <div class="row" id="Overview"> `
            + outputIng +`   

              <div class="row">
                <div class="col-12">
                  <hr>     
                </div> 
              </div>

              <div class="row">

                <div class="col-4">
                  <button type="button" class="btn" id="buttonAdd">Add to menu</button>
                </div>

                <div class="col-2" id="boxSum">
                  <p>SEK</p>
                </div>

                <div class="col-2" id="boxSum">
                  <p>JS</p>  
                </div>  

              </div>  
            </div> 
          </div> 
          </div>`);

}