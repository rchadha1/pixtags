jQuery(document).ready(function($) {
	
	$("#login").click(function(event){
		/* Act on the event */
		console.log("Button was clicked");
		$("#login").transition({opacity: 0});
		$("#register").transition({opacity: 0});

		$("#logo-title").transition({top: "5%"});
		$("#login-window").transition({opacity: 1});




	});


	$("#register").click(function(event) {
		console.log("register was clicked");

		$("#login").transition({opacity: 0});
		$("#register").transition({opacity: 0});

		$("#logo-title").transition({top: "5%"});
		$("#register-window").transition({opacity: 1});	


	



			// $("#login").transition({opacity: 0});
			// $("#register").transition({opacity: 0});

			// $("#logo-title").transition({top: "5%"});
			// $("#login-window").transition({opacity: 0});



	});

	$("#SUBMIT").click(function(event) {
		console.log("submit was clicked");
		$("#register-window").transition({opacity: 0});
		$("#logo-title").transition({top: "10%"});
		$("#login").transition({opacity: 1});
		$("#register").transition({opacity: 1});

		console.log($("#firstname").val());
		console.log($("#lastname").val());
		console.log($("#USERNAME").val());
		console.log($("#PASSWORD").val());
		console.log($("#email").val());

		// $.get("localhost:3000/register?firstname="+$("#firstname").val()+"&lastname="+$("#lastname").val()+"&username=" +$("#USERNAME").val()
	 //          + "&password=" +$("#PASSWORD").val() + "&email=" +$("#email").val());
	$.ajax({
	     url:encodeURI("http://localhost:3000/register?firstname="+$("#firstname").val()+"&lastname="+$("#lastname").val()+"&username=" +$("#USERNAME").val()
	          + "&password=" +$("#PASSWORD").val() + "&email=" +$("#email").val()),
	     dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
	     success:function(json){
	         // do stuff with json (in this case an array)
	         alert("Success");
	     },
	     error:function(){
	         alert("Error");
	     }      
	});

	});


	// $("#submit").click(function(event) {
	// 	console.log("submit was clicked");


	// 	$("#login").transition({opacity: 1});
	// 	$("#register").transition({opacity: 1});

	// 	$("#logo-title").transition({top: "5%"});
	// 	$("#login-window").transition({opacity: 0});


	// }

	


});
