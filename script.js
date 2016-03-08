$(document).ready(function(){

	// Variable that will be needed
	var p1Score = 0;
	var p2Score = 0;
	var catGame = 0; 
	var xoClick = 0; 
	var player 
	// For the divs to be clicked one and track the clicks 


	$('.block').one('click',function(){
		//for alternation

		xoClick++
		//console.log(xoClick);
		//the alternating 
		if((xoClick % 2 === 0)===false){
			player = "X";
			$(this).html(player);
		} else if((xoClick % 2 === 0)===true){
			player = "O";
			$(this).html(player);
		} else {
			null
		}

		//For Troubleshooting and monitoring 
			  // console.log($('.r1c1').html());
			 // console.log($('.r1c2').html());
			 // console.log($('.r1c3').html());
			 // console.log($('.r2c1').html());
			 // console.log($('.r2c2').html());
			 // console.log($('.r2c3').html());
			 // console.log($('.r3c1').html());
			 // console.log($('.r3c2').html());
			 // console.log($('.r3c3').html());

		//Win condition
		if ($('.r1c1').html() === $('.r1c2').html() === $('.r1c3').html()){
			 console.log(player + ' Wins!');
			  console.log($('.r1c1').html());
			 // console.log($('.r1c2').html());
			 // console.log($('.r1c3').html());
		} else if ($('.r2c1').html() === $('.r2c2').html() === $('.r2c3').html()){
			console.log(player + ' Wins!'); 
		} else if ($('.r3c1').html() === $('.r3c2').html() === $('.r3c3').html()){
			console.log(player + ' Wins!'); 
		} else if ($('.r1c1').html() === $('.r2c1').html() === $('.r3c1').html()){
			console.log(player + ' Wins!'); 
		} else if ($('.r1c2').html() === $('.r3c2').html() === $('.r3c2').html()){
			console.log(player + ' Wins!'); 
		} else if ($('.r3c3').html() === $('.r3c3').html() === $('.r3c3').html()){
			console.log(player + ' Wins!'); 
		} else if ($('.r1c1').html() === $('.r2c2').html() === $('.r3c3').html()){
			console.log(player + ' Wins!'); 
		} else if ($('.r1c3').html() === $('.r3c2').html() === $('.r3c1').html()){
			console.log(player + ' Wins!'); 
		 } else { null }
		 //proving that no matter where I put it; it can see .r1c1
		 //console.log($('.r1c1').html());

	});
	// This is for the reset button 


});