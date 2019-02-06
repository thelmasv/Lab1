	dinnerCOntainer = $.getElementByClassName('dinner')
	dinnerCOntainer.addAttribute('hidden')


	menuButton = getElementByClassName('knapp1')
	menuButton.addEventListener('click', () => {
		// vad ska hända vid clivk
		if (dinnerCOntainer.hasAttribute('hidden')){

		}else {
			dinnerCOntainer = $.getElementByClassName('dinner')
		dinnerCOntainer.addAttribute('hidden')
		}

		
	})



// Model passes off responsibility to the View. Model -> View
// TaskView.js - This is the largest file in this project and could have been abstracted into multiple views.
// The constructor function sets up five Event objects. This allows the view to call the notify() method on each Event object, thus passing the responsibility onto the controller.

/* TaskController.js - 
This class sits between the view and the model and acts as the glue that binds them together. 
It allows for easy decoupling of your model and view. Whenever the view uses the EventDispatcher, the controller will be there to listen and then update the model. 
Besides that, all the method declarations inside this file should look relatively similar to the View and Model.

App.js - 
This file is responsible for kicking off the app. An instance of the Model-View-Controller gets created here.
*/ 

