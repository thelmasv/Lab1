var DinnerPrintout = function (container, model) {

  this.update = function(model, changeDetails) {

    var menuList = [];
    var chosenMenu = model.getCurrentMenu(); 
    var confirmedDishes = ""

    var outputPrintout = ""

    var sumDish = 0; 
    var outputConfirmed = ""; 
    var totalMenuPrice = model.getTotalMenuPrice(chosenMenu[i]); 

  // Loopa igenom alla ingredienser och dess värden för vald dish
    for (i = 0; i < chosenMenu.length; i++) {
      var confirmedDishes = model.getDish(chosenMenu[i]); 
      outputPrintout += `<div class="col-12 col-md-4">
              						<img src="` + confirmedDishes.image + `" id="firstPicLastPage" />
              					</div>
              					<div class="col-12 col-md-4" id="dishtext">
              						<h3> ` + confirmedDishes.name + ` </h3>
              					</div>
              					<div class="col-12 col-md-4" >
              						<p id="preperation-title">PREPERATION</p>
              						<p id="img-text">` + confirmedDishes.description + ` </p> 
              					</div>` 


    }

  	container.html (`
  	<div class="row" class="col-12">
   		` + outputPrintout + `
  	</div>
        <br><br>`)
   }

  model.addObserver(this.update); 

}

