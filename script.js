
var starCount = 0;

window.onload = function (){

    var stars = document.getElementById('container_stars');
    stars.outerHTML = '<div id="stars"></div>';

$("button").click(function (){

	$("#interactive_msg").addClass("show_msg");


	$('#moon_container').addClass("moon_animation");

	$("#flame").addClass("rocket_flame");

    $('#rocket_container').addClass("blast-off");

	$('#fume_1').addClass("fumes_animation_1");
	$('#fume_2').addClass("fumes_animation_2");
	$('#fume_3').addClass("fumes_animation_3");
	$('#fume_4').addClass("fumes_animation_4");
	$('#fume_5').addClass("fumes_animation_5");

	$('#container_sky').addClass("darkening_sky");

	addStars();
});

}; // END onload

// FUNCTION BELOW SRC: https://codepen.io/llang8/pen/oVWVJR
// PURPOSE: function to get the stars to randomly appear and fall from the sky

// LINE 48 SRC: https://codepen.io/elad2412/pen/hBaqo
// PURPOSE: Reference to create interactive portion;


function addStars() {
    console.log('test');
    var starLoop = setInterval(function() {
        console.log('test');
        var starChoice = Math.random();
        var x = Math.floor(window.innerWidth * Math.random());
        if(starChoice <= .5) {
            stars.outerHTML += `<div id="star${starCount}" class="stars_small"></div>`;
        } else if (starChoice <= .95) {
            stars.outerHTML += `<div id="star${starCount}" class="stars_medium"></div>`;
        } else {
            stars.outerHTML += `<div id="star${starCount}" class="stars_shootingStars fa fa-star"><input id="star${starCount}" class="star_input" type="radio"><label for="star${starCount}" class="label_msg"><span></span></label></div>`;
        }
        var currStar = document.getElementById(`star${starCount}`);
        currStar.style.left = x+'px';
        starCount++;
        if ( starCount > 200) {
            clearInterval(starLoop);
        }
    }, 200);
}