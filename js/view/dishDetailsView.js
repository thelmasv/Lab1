var DishDetailsView = function (container, model) {
	container.html( 
		'<div class="row">' + 
          '<div class="col-12 col-md-6" id="dishDetailPic">' + 
            '<h3>MEATBALLS</h3>' + 
              '<img src="meatballs.jpg" style="width:398px;height:298px;"/>' + 
                '<p id="img-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' + 
                '<a id="GoBackButton" href="index2" class="previous">&laquo; Go back to search</a>' + 
          '</div>' + 
          '<div class="col-12 col-md-6" id="TotIngredients">' + 
            '<div class="box">INGREDIENTS FOR 3 PEOPLE' + 
            '<hr>' + 
            '<div class="row" id="Overview">' + 
              '<div class="col-2">' + 
                '<p>5l</p>' + 
                '<p>2dl</p>' + 
                '<p>1 spoon</p>' + 
              '</div>' + 
              '<div class="col-2">' + 
                '<p>Meat</p>' + 
                '<p>Peppar</p>' + 
                '<p>Butter</p>' + 
              '</div> ' + 
              '<div class="col-2">' + 
                '<p>SEK</p>' + 
                '<p>SEK</p>' + 
                '<p>SEK</p>' + 
              '</div>' + 
              '<div class="col-2">' + 
                '<p>40</p>' + 
                '<p>5</p>' + 
                '<p>15</p>' + 
              '</div>' + 
            '</div>' + 
              '<div class="row">' + 
                '<div class="col-12">' + 
                  '<hr>' +     
                '</div>' + 
              '</div>' + 
              '<div class="row">' + 
                '<div class="col-4">' + 
                  '<button type="button" class="btn" id="buttonAdd">Add to menu</button>' + 
                '</div>' + 
                '<div class="col-2" id="boxSum">' + 
                  '<p>SEK</p>' + 
                '</div>' + 
                '<div class="col-2" id="boxSum">' + 
                  '<p>JS</p>' + 
                '</div>' + 
              '</div>' + 
            '</div>' + 
          '</div>' + 
          '</div>');

	}
