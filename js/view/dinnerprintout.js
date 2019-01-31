var DinnerPrintout = function (container, model) {

 var menuList = [];
 var chosenMenu = model.getFullMenu(); 
 var confirmedDishes = ""

 var outputPrintout = ""

// Loopa igenom alla ingredienser och dess värden för vald dish
  for (i in chosenMenu) {
    confirmedDishes = model.getDish(chosenMenu[i]); 
    outputPrintout += `
	                 <div class="col-12 col-md-4">
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
	<div class="row">
 		` + outputPrintout + `
	</div>

      <div class="row">
      </div>

      <br><br>
      <hr>

    <div class="container-fluid">
      <div class="row" id="buttonPrint">
        <div class="col-md-12" id="first-page-col">
        <a href="index6.html"><button type="button" class="btnw3" id="button1">Print Full Recipe</button></a>
        </div>
      </div>
    </div>`)

 }

