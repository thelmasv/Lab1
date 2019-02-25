var DinnerPrintout = function (container, model) {

  this.update = function(model, changeDetails) {

    var menuList = [];
    var chosenMenu = model.getCurrentMenu(); 
    var confirmedDishes = ""

    var outputPrintout = ""

    var sumDish = 0; 
    var totalMenuPrice = model.getTotalMenuPrice(chosenMenu[i]); 

  // Loopa igenom alla ingredienser och dess värden för vald dish
    for (var i = 0; i < chosenMenu.length; i++) {
      var confirmedDishes = chosenMenu[i]; 
      outputPrintout += `<div class="col-12 col-md-4" id="firstPicLastPage">
              						<img src="` + confirmedDishes.image + `" id="firstPicLastPage" />
                          <br>
              					</div>
              					<div class="col-12 col-md-3" id="dishtext">
              						<h3> ` + confirmedDishes.title + ` </h3>
              					</div>
              					<div class="col-12 col-md-5" >
              						<p id="preperation-title">PREPERATION</p>
              						<p id="img-text">` + confirmedDishes.instructions + ` </p> 
              					</div><br><br>` 


    }

  	container.html (`
  	<div class="row" class="col-12">
   		` + outputPrintout + `
  	</div>
        <br><br>`)
   }

  model.addObserver(this.update); 

}

