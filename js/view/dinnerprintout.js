var DinnerPrintout = function (container, model) {

var dishDetails = model.getDish(100);
 
  var outputIng = " "; 

// Loopa igenom alla ingredienser och dess värden för vald dish
  for (i = 0; i < getDish.length; i++) { 
    // console.log(dishIngredients[i].name);

    outputIng += `<div class="row" id="Overview">
	                  <div class="col-12 col-md-3">
	                    <p>`+ getDish[i].name +`</p>
	                  </div>
	                  <div class="col-2">
	                    <p>`+ (getDish[i]) +`</p>  
	                  </div>
                  </div>`
                  // sumDish += dishIngredients[i].price * model.getNumberOfGuests(); 

  }



	container.html (`
	<div class="row">
		<h3> ` + dishDetails.name + ` </h3>
	        <img src="` + dishDetails.image + `" style="width:248px;height:248px class="center"/>
	           	<p id="img-text">` + dishDetails.description + ` </p> 
        <div class="col-12 col-md-3" id="firstPicLastPage">
          <img src="meatballs.jpg" style="width:198px;height:198px" id="Pic6"><br><br>
          <!-- <img src="icecream.jpg">   
          -->
        </div>

        <div class="col-12 col-md-4" id="dishtext">
          <p style="font-weight:bold" id="dishtext-title">MEATBALLS</p>
          <p id="dishtext-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="col-12 col-md-5">
          <p style="font-weight:bold" id="preperation-title">PREPERATION</p>
          <p id="preperation-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <hr><br>

      <div class="row">
        <div class="col-12 col-md-3" id="firstPicLastPage">
          <img src="icecream.jpg" style="width:198px;height:198px"><br><br>
        </div>

        <div class="col-12 col-md-4" id="dishtext">
          <p style="font-weight:bold" id="dishtext-title">ICECREAM</p>
          <p id="dishtext-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="col-12 col-md-5">
          <p style="font-weight:bold" id="preperation-title">PREPERATION</p>
          <p id="preperation-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>



        <div class="col-md-2">
        </div>
        <!-- + Add vertical line and total prize -->

      </div>

      <div class="row">
      </div>

      <br><br><hr>
    </div>
    <!-- + Add price for each dish -->

    <div class="container-fluid">
      <div class="row" id="buttonPrint">
        <div class="col-md-12" id="first-page-col">
        <a href="index6.html"><button type="button" class="btnw3" id="button1">Print Full Recipe</button></a>
<!-- + Make print-button bigger! -->
        </div>
      </div>
    </div>`)

 }