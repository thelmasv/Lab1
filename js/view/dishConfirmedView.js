var DishConfirmedView = function (container, model) {
	container.html(` 
		<div class="container-fluid" >
        <div class="row" id="headerConfirmDinner">
          <div class="col-md-6" id="finalPeople">
            <h2>My Dinner: 3 people</h2>
          </div>
          '<div class="col-md-6" id="button5">
            '<a href="index4.html"><button type="button" class="btnw3" id="button1">Go back and edit dinner</button></a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<br><br>' +
      '<div class="container-fluid">' +
        '<div class="row">' +

          '<div class="col-md-2">' +
          '</div>' +

          '<div class="col-8 col-md-2">' +
            '<div id="foodCol">' +
              '<img src="meatballs.jpg" id="imgMain"/> ' +
              '<p>Meatballs</p>' +
            '</div>' +
            '<div>' +
              '<p id="price">SEK 92.05</p>' +
            '</div>' +
          '</div>' +

          '<div class="col-8 col-md-2">' +
            '<div id="foodCol">' +
              '<img src="icecream.jpg"/>' +
              '<p id="imgIce">Icecream</p>' +
            '</div>' +
            '<dir>' +
              '<p id="price">SEK 46.40</p>' +
            '</dir>' +
          '</div>' +

          '<div class="col-8 col-md-2">' +
            '<div id="foodCol">' +
              '<img src="sourdough.jpg"/>' +
              '<p id="imgSour">Sourdough</p>' +
            '</div>' +
            '<div>' +
              '<p id="price">SEK 51.00</p>' +
            '</div>' +
          '</div>' +

          '<div class="col-md-2">' +
            '<br><br><br><br>' +
            '<p id="price">TOTAL:</p>' +
            '<p id="price">SEK 189.45</p>' +
          '</div>' +
        '</div>' +

        '<div class="row">' +
        '</div>' +

        '<br><br><hr>' +
      '</div>' +

      '<div class="container-fluid">' +
        '<div class="row" id="buttonPrint">' +
          '<div class="col-md-12" id="first-page-col">' +
          '<a href="index6.html"><button type="button" class="btnw3" id="button1">Print Full Recipe</button></a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<br><br><br><br>'
		´)

}