jQuery(function($){
	// grab each slider (multiple supported)    
	$('#hme').each(function(){
		// find the slides in this slider
       	var $slides = $(this).find('#home .item');
		// get the 0 based amount of slides
        var numSlides = $slides.length - 1;
		// incrementor
        var i = 0;
       
        // rotate slides
       	var rotate = function(){
            // remove all sliding classes
            $slides.removeClass('active inactive');
            // add inactive to the current slide
            $slides.eq(i).addClass('inactive');
            // reset counter if last slide (so animates first one)
            if(i == numSlides){
                i = -1;
            }
            // add active to incremented slide (next slide)
            $slides.eq(++i).addClass('active');
            // call this every few seconds
           	var timer = window.setTimeout(rotate, 1000);
       	};

        // initialize the slider
       	rotate();
    });