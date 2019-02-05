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