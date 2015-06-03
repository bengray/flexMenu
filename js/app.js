requirejs.config({
	paths: {
		"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min"
	}
});

// require(["module/name", ...], function(params){ ... });
require(["jquery"], function ($) {
	var userName = "ben.gray";	// Probably going to be getting this from session data
								// keeping it static for now 
	
	$("head").append("<link href='/flexmenu/fonts/font-awesome/css/font-awesome.min.css' rel='stylesheet'>");
	$("head").append("<link href='/flexmenu/css/custom.css' rel='stylesheet'>");

	// Make an ajax call to the menu Builder, get the HTML back
	var getMenuHTML = $.ajax({
		url: "/flexmenu/menuBuilder.php",
		data: {"userName": userName},
		context: document.body
	});

	// Prepend the HTML to the body
	getMenuHTML.done(function(data) {
		$(this).prepend(data); // "data" will be the complete HTML markup
	});

	// Then add some functionality to the Markup
	getMenuHTML.then(function() {
		addMenuFunctionality();
	});

	function addMenuFunctionality() {
	
		var mainMenu = $(".mainMenu");
		var allSubMenus = $(".subMenu");
		var toggleButton = $("#toggleButton");
		var itemWithChild = $(".hasChild");
		var itemNoChild = $(".noChild");
		var animationSpeed = 200;
	
	
		///////////////////////
		///  CLICK ACTIONS  ///
		///////////////////////
	
		// Clicking anywhere on the html element will close the menu, this is the default behavior
		$('html').click(function() {
			closeAllMenus();
		});
	
		// Remove default click behavior for these elements (don't close menus on click)
		$('.subMenu > p, .subMenu > form').click(function(event) {
			event.stopPropagation();
		});
	
		// Remove default click behavior, and add new functionality
		toggleButton.click(function(event) {
			event.stopPropagation();
			
			// If the menu is out and you click the toggle button, slide all the menus back to the left
			if(parseInt(mainMenu.css('left'),10) == 0) {
				closeAllMenus();
				
			// If the menu is not out, then slide the main and sub menu out
			} else {
				mainMenu.animate({
					left: 0
				}, animationSpeed);
				allSubMenus.animate({
					left: 0
				}, animationSpeed);
			}
	
		});
	
		///////////////////////////
		///  MOUSEOVER ACTIONS  ///
		///////////////////////////
	
		// If you mouseover a main item that has children
		itemWithChild.mouseenter(function() {   
			var thisItemNumber = $(this).data("item-number"); 
			var thisSubMenu = $(".subMenu"+thisItemNumber);
	
			// All the subMenus EXCEPT for this subMenu need to slide left
			allSubMenus.not(thisSubMenu).animate({
				left: 0
			}, animationSpeed);
	
			// Slide this item's subMenu right
			thisSubMenu.animate({
				left: allSubMenus.outerWidth()
			}, animationSpeed);
	
		});
	
		// If you hover over any item that doesn't have a subMenu, hide all subMenus
		itemNoChild.mouseenter(function() {
			allSubMenus.animate({
				left: 0
			}, animationSpeed);
		});
	
		//////////////////////////
		///  COMMON FUNCTIONS  ///
		//////////////////////////
	
		function closeAllMenus() {
			mainMenu.animate({
				left: -mainMenu.outerWidth()
			}, animationSpeed);
			allSubMenus.animate({
				left: -allSubMenus.outerWidth()
			}, animationSpeed);
		}
	}
	
});