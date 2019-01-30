var ExampleView = function (container, model) {
	
	/**
	 * We use the @method find() on @var {jQuery object} container to look for various elements 
	 * inside the view in orther to use them later on. For instance:
	 * 
	 * @var {jQuery object} numberOfGuests is a reference to the <span> element that 
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data (for now 
	 * only 'Hello world', but you should change this by end of Lab 1).
	 * 
	 * We use variables when we want to make the reference private (only available within) the
	 * ExampleView.
	 * 
	 * IMPORTANT: Never use $('someSelector') directly in the views. Always use container.find
	 * or some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 * 
	 */
	var numberOfGuests = container.find("#numberOfGuests");

	/**
	 * When we want references to some view elements to be available from outside of view, we 
	 * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it 
	 * will be important for assigning listeners to these buttons, because the listeners
	 * should not be assigned in the view, but rather in controller.
	 * 
	 * We can then, in some other code, use exampleView.plusButton to reference the 
	 * this button and do something with it (see Lab 2).
	 * 
	 */
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */
	numberOfGuests.html("Hello World");
	
}
 

 /** --------------------------------------------------------------*/
.html
 <div class="container-fluid">
      <div class="row">
        <div class="col-2" id="sidebar">
         <div class="row">
          <div class="col-12">
            <h4>My Dinner</h4>
          </div>
         </div>

         <div class="row">
          <div class="col-6">
            <h5>People</h5>
          </div>
          <div class="col-6">
            <form>
            <div class="form-group">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            </form>
          </div>
         </div>

          <div class="row" id="dish-name">
            <div class="col-6">
              <p>Dish name</p>
            </div>
            <div class="col-6">
              <p id="cost">Cost</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p id="price">SEK 0.00</p>
            </div>
         </div>


         <div class="row">
          <div class="col-md-12" id="sidebarButton">
            <a href="index2.html"><button type="button" class="btn" id="button2" disabled>Confirm Dinner</button></a>
          </div>
          </div>