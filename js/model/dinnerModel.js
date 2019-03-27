
//DinnerModel Object constructor

var DinnerModel = function() {
	var numberOfGuest = 1;
	var menu = [];
	var observers = []; 
	var selectedId = 0;  
	var totMenuPrice = 0.00; 
	var API_KEY = '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767';
	var API_Dish = []
	var allDishes = []; 

	this.addObserver = function(observer) {
		observers.push(observer);  
	}

	this.notifyObservers = function(changeDetails) {
		for(var i=0; i<observers.length; i++)
			observers[i](this, changeDetails);
	}

	// Remove observer from array. When view has done its job, hide view and/by remove itself as a model observer
    this.removeObserver = function(observer) {
    }
    //.... other model data and code calling notifyObservers() when the model changes

    this.setId = function (id) {
    	selectedId = id;
     	this.notifyObservers('selectedId');
    }

  	this.getId = function() {
     	return selectedId;
    }

	//* local variables to store the number of guests and dishes added to the dinner menu
	this.setNumberOfGuests = function(num) {
		if (num >= 1) {
			numberOfGuest = num;
			this.notifyObservers('numberOfGuests'); 
		}
	}
	
	this.getNumberOfGuests = function() {
		return numberOfGuest;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		for (dish in menu) {
			if (menu[dish].type == type) {
				return menu[dish].name;
			}
		}
	}

	this.getFullMenu = function() {
		var allDishes = [];
		for (key in menu) {
			allDishes.push(menu[key]);
			// tog bort getDish från här!!!
		}
		return allDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredientList = [];
		for (dish in menu) {
			for (var ingredient in menu[dish].ingredients) {
				ingredientList.push(menu[dish].ingredients[ingredient]);
			}
		}
		return ingredientList;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function(id) {
		var totalCost = 0; 
		for (var i = 0; i < menu.length; ++i) {
			totalCost += menu[i].pricePerServing; 
		}
		return totalCost; 
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	// this.addDishToMenu = function(dish) {
	// 	// console.log("id nu:", id)
	// 	for (var selectedDish of menu) {
	// 		if (selectedDish.id == dish.id) {
	// 			this.removeDishFromMenu(dish.id);
	// 		}
	// 	}
	// 	menu.push(dish); 
	// 	this.notifyObservers('menu');
	// }

	this.addDishToMenu = function (dish) {
		for (var i = 0; i < menu.length; i++) {
			if (menu[i].id == dish.id) {
                this.removeDishFromMenu(menu[i].id, true);
            }
		}
		menu.push(dish);
		this.notifyObservers('menu')
	}

	// skicka in hela dishen

    this.getCurrentMenu = function() {
    	// console.log("menu: ", menu)
    	return menu; 
    }

	// this.removeDishFromMenu = function(id) {
	// 	for (var dish = 0; dish < menu.length; dish++) {
	// 		if (menu[dish].id === id) {
	// 			menu.splice(dish);
	// 		}
	// 	}
	// 	this.notifyObservers('menu');
	// }


	this.removeDishFromMenu = function (id, mute = false) {
		var index = null;
		for (var i = 0; i < menu.length; i++) {
			if (menu[i].id == id) {
                index = i;
            }
		}
        if (index > -1) { menu.splice(index, 1); }
		if (!mute) { notifyObservers('menu') }
	}

	this.getAllDishes = function (type, filter) {
		console.log("getAllDishes")
		if (filter===null) {
			filter = "";
		}
	    return fetch("http://sunset.nada.kth.se:8080/iprog/group/3/recipes/search?query=" + filter + "&type=" + type,{ 
	  		method: "GET", 
            headers:{   
                'X-Mashape-Key': API_KEY
            }
	    })
	    .then(response => response.json())
	    .then(data => data.results)
	    // .then(object => {

	    // })
	    // .then(handleHTTPError)
	    // .then(console.log)
	    .catch(()=>console.error)
	}

	//function that returns a dish of specific ID
	this.getDish = function (id, title, type) {
		console.log('getDish')
		return fetch("http://sunset.nada.kth.se:8080/iprog/group/3/recipes/" + id + "/information",{ 
			// addera sträng med id på något sätt 
	  		method: "GET", 
            headers:{   
                'X-Mashape-Key': API_KEY
            }
	    })
	    .then(response => response.json())
	    .catch(()=>console.error)
	}

	// Get dish price for one dish and all people
	this.getDishPrice = function (dishIngredients) {
		var sum = 0;
		// for (i = 0; i < dishIngredients.length; i++ ) {
		// 	sum += dishIngredients[i].price; 
		// }
		return sum; 
	}

}

