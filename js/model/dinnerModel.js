
//DinnerModel Object constructor

var DinnerModel = function() {
	var numberOfGuest = 1;
	var menu = [];
	var observers = []; 
	// var dish = [100]; 
	var selectedId = 2; 
	// this.menuPlace = new Array();



// currentDish???

	this.addObserver = function(observer) {
		observers.push(observer);  
	}

	this.notifyObservers = function(changeDetails) {
		for(var i=0; i<observers.length; i++)
			observers[i](this, changeDetails);
		// we assume that observers[i] is a function, so we call it like observers[i](parameters)
	}


	// Remove observer from array
	// when view has done its job, hide view and/by remove itself as a model observer
    this.removeObserver = function(observer) {
    }
    //.... other model data and code calling notifyObservers() when the model changes

    this.setId = function (id) {
    	selectedId = id;
     	this.notifyObservers();
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

	// * implement the empty methods (getSelectedDish, getFullMenu, etc.)
	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		//TODO Lab 1
		for (dish in menu) {
			if (menu[dish].type == type) {
				return menu[dish].name;
			}
		}
	}

		// ELLER: 

	//this.getSelectedDish = function(type) {}


	//Returns all the dishes on the menu.
	// ANROPA 
	this.getFullMenu = function() {
		//TODO Lab 1
		var menuList = [];
		for (var dish in menu) {
			menuList.push(menu[dish]);
		}
		return menuList;

		// ELLER TA BORT ALLT OCH BARA SKRIVA 
		// 	this.getFullMenu = function() {
				// return menu; 
				// } 


	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 1
		var ingredientList = [];
		for (dish in menu) {
			for (var ingredient in menu[dish].ingredients) {
				ingredientList.push(menu[dish].ingredients[ingredient]);
			}
		}
		return ingredientList;
	}

	// ANNAN KOD
	  // this.getAllIngredients = function(obj) {
	  //   var ingredients = false;
	  //   if (typeof obj === 'object') {
	  //     ingredients = [];
	  //     for (var i = 0; i < obj.length; i++) {
	  //       ingredients.push(obj[i]);
	  //     }
	  //   }
	  //   return ingredients;
	  // }




	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function(id) {
		var totalCost = 0; 
		numberPeople = this.getNumberOfGuests(); 
		for (var i = 0; i < menu.length; ++i) {
			totalCost += this.getDishPrice(this.getDish(menu[i]).ingredients); 
		}
		return totalCost * numberPeople; 
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var amount = 0; 
		var doubled = false; 
		var dishType = (this.getDish(id)).type; 

		if (menu === undefined || menu.length === 0) {
			menu[0] = this.getDish(id); 
		}

		else {
			menu.forEach(function(dishesInMenu) {
				if (dishesInMenu.id == id) {
					doubled = true; 
					return; 
				}
				else if (dishesInMenu.type == dishType) {
					doubled = true; 
					return; 
				}
				amount++; 

			}); 

			if (doubled == true) {
				return; 
			}
			else {
				menu.push(this.getDish(id));
			}
		}

		// var dish = this.getDish(id);
		// menu.push(dish);
		this.notifyObservers('menu'); 

	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for (dish in menu) {
			if (menu[dish].id == id) {
				delete menu[dish];
			}
		}
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned

	// this.getAllDishes = function(type, filter) {
	//     if (!type && !filter) {
	// 	    return dishes;
	// this.getAllDishes = function (type,filter) {
	//   return dishes.filter(function(index, dish) {
	// 	var found = true;
	// 	if(filter){
	// 		found = false;
	// 		dish.ingredients.forEach(function(index, ingredient) {
	// 			if(ingredient.name.indexOf(filter)!=-1) {
	// 				found = true;
	// 			}
	// 		});

	// 		if(dish.name.indexOf(filter) != -1)
	// 		{
	// 			found = true;
	// 		}
	// 	}
	//     if (type === "starter" || type === "main" || type === "dessert") {
	//       return dishes.filter(function(dish) {
	//         var found = true;
	//         if (filter) {
	//           found = false;
	//           if (dish.name.toLowerCase().indexOf(filter) != -1) // all dish names in lower case
	//           {
	//             found = true;
	//           }
	//           return dish.type == type && found;
	//         } else {
	//           return dish.type;
	//         }
	//         if (!filter) {
	//           return dish.type;
	//         }
	//       });
	//     } 
	//     else {
	//       return dishes.filter(function(dish) {
	//         var found = true;
	//         if (filter) {
	//           if (dish.name.toLowerCase().indexOf(filter) != -1) {
	//             return dish;
	//           }
	//         }
	//       });
	//     }
	//   })
	// }



	this.getAllDishes = function (type, filter) {

		// Make all types lowercase
		type = type.toLowerCase();

	  	return dishes.filter(function(dish) {

			var found = true;

			if ( filter ) {

				found = false;

				dish.ingredients.forEach( function( ingredient ) {

					if ( ingredient.name.indexOf( filter ) != -1 ) {
						
						found = true;

					}

				});

				if ( dish.name.indexOf( filter ) != -1 ) {

					found = true;

				}

			}

			if ( type == "all" ) {

				return dishes;

			}
			
			else {
		  	
		  		return dish.type == type && found;

		  	}

		});

	}

	//function that returns a dish of specific ID
	this.getDish = function (id, name, type) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}

	// Get dish price for one dish and all people
	this.getDishPrice = function (dishIngredients) {
		var sum = 0;
		for (i = 0; i < dishIngredients.length; i++ ) {
			sum += dishIngredients[i].price; 
		}
		return sum; 
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}

