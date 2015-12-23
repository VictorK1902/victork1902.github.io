var prevMenuClicked;
var prevPrjCatClicked, prevPrjClicked;
var XOIsVisible = true;


window.onload = function() {
	adjustToScreen();
	doClick("ab");
}

function doClick(input){	
	console.log("Called by element with id: "+ input.toString());
	if (prevMenuClicked!=null)
			prevMenuClicked.hide();	
	if (input == "ab"){		
		$("#aboutme").fadeIn(700);
		prevMenuClicked = $("#aboutme");
	}
	if (input == "prj"){	
		switchPrjCat("#acaCat");
		showXOPlayer('true');
		$("#projects").fadeIn(700);
		prevMenuClicked = $("#projects");
	}
	if (input == "wex"){
		$("#workexp").fadeIn(700);
		prevMenuClicked = $("#workexp");
	}
	if (input == "ct"){
		$("#contact").fadeIn(700);
		prevMenuClicked = $("#contact");
	}
}


function switchPrjCat(theID){
	if (prevPrjCatClicked!=null){
		prevPrjCatClicked.css("color","black");
		prevPrjCatClicked.css("text-decoration", "none");	
	}
	if (prevPrjClicked!=null){
		prevPrjClicked.hide();
	}
	prevPrjCatClicked = $(theID);
	prevPrjClicked = (theID == "#acaCat")?$('#acaPrjBody'):$('#sidePrjBody');
	prevPrjClicked.show();

	$(theID).css("color","#593e1a");
	$(theID).css("text-decoration", "underline");
}
function showXOPlayer(key){
	if (key == 'true'){ // called from from clicking projects
		$("#xobody").slideUp();
        $("#xoIcon").removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        XOIsVisible = false;
	}
	else { // called from clicking expand/collapse icon
		if (!XOIsVisible) {
        // expand the panel
	        $("#xobody").slideDown();
	        $("#xoIcon").removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');        
	    }
	    else {
	        // collapse the panel
	        $("#xobody").slideUp();
	        $("#xoIcon").removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	    }
	    XOIsVisible = !XOIsVisible;
	}
	
}

		
function adjustToScreen(){	
	var size = getBootstrapDeviceSize();
    if( size == "xs"){
		console.log("xs");
    }
    if( size == "sm"){
		console.log("sm");
    }
    if( size == "md"){
		console.log("md");
    }
    if( size == "lg"){
		console.log("lg");
    }

}

function getBootstrapDeviceSize() {
  return $('#users-device-size').find('div:visible').first().attr('id');
}