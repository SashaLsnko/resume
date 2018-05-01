$(document).ready(function(){

    $('img.updown').addClass('show').removeClass('updown');
   
 	$('.show').css({top:-320});
    
    function loop() {
    	$('.show')
		.animate({top:-10},5000)
		.animate({top:-320},6000, loop); // callback
 	}

    loop();

    $('#classes').find('td').hover(
    	/*function () {
    	$('#108').text("llalalaa");
	}
	*/
		function() {
			var red = Math.floor((Math.random() * 100) + 155);
			var green = Math.floor((Math.random() * 100) + 0);
			var blue = Math.floor((Math.random() * 100) + 0);
			var color = "rgb("+red+"," + green+ "," + blue+ ", 0.1)";
			console.log(color);

	        var one = $(this); // caching $(this)
	        one.css("background-color",color);
	        if (one.text() == $('#108').text()){
		        one.data('108Text', one.text());
		        one.text("Python");
		        one.append("<button class='grade'> A</button>");

		    }
		    if (one.text() == $('#148').text()){
		        one.data('148Text', one.text());
		        one.text("OOP, Recursion");
		        one.append("<button class='grade'> A- </button>");
		    }
		    if (one.text() == $('#207').text()){
		        one.data('207Text', one.text());
		        one.text("Design Patterns, Git");
		        one.append("<button class='grade'> A- </button>");
		    }
		    if (one.text() == $('#209').text()){
		        one.data('209Text', one.text());
		        one.text("C");
		        one.append("<button class='grade'> C </button>");
		    }
		    if (one.text() == $('#236').text()){
		        one.data('236Text', one.text());
		        one.text("Proofs");
		        one.append("<button class='grade'> B+</button>");
		    }
		    if (one.text() == $('#258').text()){
		        one.data('258Text', one.text());
		        one.text("Computer Organization");
		        one.append("<button class='grade'> A</button>");
		    }
		    if (one.text() == $('#263').text()){
		        one.data('263Text', one.text());
		        one.text("Algorithms");
		        one.append("<button class='grade'> B-</button>");
		    }
		    if (one.text() == $('#301').text()){
		        one.data('301Text', one.text());
		        one.text("Design Patterns, Agile, Scrum");
		        one.append("<button class='grade'> A</button>");
		    }
		    if (one.text() == $('#324').text()){
		        one.data('324Text', one.text());
		        one.text("Functional Programming");
		        one.append("<button class='grade'> A</button>");
		    }
		    if (one.text() == $('#369').text()){
		        one.data('369Text', one.text());
		        one.text("Operating Systems");
		        one.append("<button class='grade'> A+</button>");
		    }
		    if (one.text() == $('#wd').text()){
		        one.data('wdText', one.text());
		        one.text("PHP, Wordpress");
		        one.append("<button class='grade'> A-</button>");
		    }
	    },
	    function() {
	        var one = $(this); // caching $(this)
	        one.css("background-color","rgba(255, 255, 255, 0.5)");

	        if (one.text() == $('#108').text()){
	        	one.text(one.data('108Text'));
	        }
	        if (one.text() == $('#148').text()){
	        	one.text(one.data('148Text'));
	        }
	        if (one.text() == $('#207').text()){
	        	one.text(one.data('207Text'));
	        }
	        if (one.text() == $('#209').text()){
	        	one.text(one.data('209Text'));
	        }
	        if (one.text() == $('#236').text()){
	        	one.text(one.data('236Text'));
	        }
	        if (one.text() == $('#258').text()){
	        	one.text(one.data('258Text'));
	        }
	        if (one.text() == $('#263').text()){
	        	one.text(one.data('263Text'));
	        }
	        if (one.text() == $('#301').text()){
	        	one.text(one.data('301Text'));
	        }
	        if (one.text() == $('#324').text()){
	        	one.text(one.data('324Text'));
	        }
	        if (one.text() == $('#369').text()){
	        	one.text(one.data('369Text'));
	        }
	        if (one.text() == $('#wd').text()){
	        	one.text(one.data('wdText'));
	        }
	    }
	);
       
    
   
    
});