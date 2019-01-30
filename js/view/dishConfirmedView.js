var DishConfirmedView = function (container, model) {
	
// getTotalMenuPrice
// getFullMenu

  // this.addDishToMenu = function(id) {
  //   //TODO Lab 1 
  //   //kod
  //   var dish = this.getDish(id);
  //   this.menu.push(dish);
  // }

  var menuList = []; 
  var chosenMenu = model.getFullMenu(); 

// HOW TO GET SEVERAL DISHES???
  var confirmedDishes = model.getDish(100);
    // console.log(confirmedDishes); 

  var sumDish = 0; 
  var outputConfirmed = ""

  for (i in confirmedDishes) {

// HOW GET THE PRICE???
    outputConfirmed = `<div class="col-8 col-md-2">
                        <div id="foodCol">
                          <img src="` + confirmedDishes.image + `" id="imgMain"/> 
                          <p>` + confirmedDishes.name + `</p>
                        </div>

                        <div>
                          <p id="price">SEK 92.05</p>
                        </div>
                      </div>` 
  }

  // ` + sumDish = model.getDishPrice(dishIngredients) * model.getNumberOfGuests(); + `

  container.html( `
      <div class="row">

        <div class="col-md-2">
        </div>

        ` + outputConfirmed + ` 

        <div class="col-8 col-md-2">
          <div id="foodCol">
            <img src="icecream.jpg"/>
            <p id="imgIce">Icecream</p>
          </div>

          <dir>
            <p id="price">SEK 46.40</p>
          </dir>
        </div>

        <div class="col-8 col-md-2">
          <div id="foodCol">
            <img src="sourdough.jpg"/>
            <p id="imgSour">Sourdough</p>
          </div>
          <div>
            <p id="price">SEK 51.00</p>
          </div>
        </div>

        <div class="col-md-2">
          <br><br><br><br>
          <p id="price">TOTAL:</p>
          <p id="price">SEK 189.45</p>
        </div>
      </div>

`
		)

}