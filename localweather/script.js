$(document).ready(function() {
	$('#to_f').hide();
	$('#to_c').hide();
	$('.getweather').click(function() {
		$('.temperature').empty();
        $('.city').empty();
        $('.typeofday').empty();
		var zipcode = $('.zipcode input').val();
		var urlstr = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&APPID=8fb15c6bb5a34a4d2e45fc99edff6cfb"
		$.getJSON(urlstr,function(json){
	            var temp = Math.round((json.main.temp-273.15)*1.8 + 32);
	            var city = json.name;
	            var day = json.weather[0].main;
	            $('.temperature').append(temp + "<a href='#'>&#8457;</a>").attr("id","Farenheit");
	            $('.city').append(city);
	            $('.typeofday').append("Today is: " + day);
	            switch (day) {
	            	case 'Drizzle':
	            	$('.dayicon').attr('data-icon','Q');
	            	break;
	            	case 'Clouds':
	            	$('.dayicon').attr('data-icon','Y');
	            	break;
	            	case 'Rain':
	            	$('.dayicon').attr('data-icon','R');
	            	break;
	            	case 'Snow':
	            	$('.dayicon').attr('data-icon','W');
	            	break;
	            	case 'Clear':
	            	$('.dayicon').attr('data-icon','B');
	            	break;
	            	case 'Thunderstorm':
	            	$('.dayicon').attr('data-icon','Z');
	            	break;
	            }
	        });
		if ($('.temperature').attr('id')==='Farenheit') {
			$('#to_c').addClass('pure-button-active').show();
			$('#to_f').addClass('pure-button-disabled').show();
		}
		else {
			$('#to_c').addClass('pure-button-active').show();
			$('#to_f').addClass('pure-button-disabled').show();
		}
	})
	$("#to_f").click(function() {
		$('#to_c').removeClass().addClass('pure-button pure-button-active');
		$('#to_f').removeClass().addClass('pure-button pure-button-disabled');
		var tmp = $('.temperature').text().slice(0,$('.temperature').text().length-1)
		output = Math.round(tmp * (9/5) + 32);
		$(".temperature").empty();
		$(".temperature").removeClass("Farenheit Celsius")
		$(".temperature").append(output + "&#8457;").addClass("Farenheit");
	});
	$("#to_c").click(function() {
		$('#to_f').removeClass().addClass('pure-button pure-button-active');
		$('#to_c').removeClass().addClass('pure-button pure-button-disabled');
		var tmp = $('.temperature').text().slice(0,$('.temperature').text().length-1)
		output = Math.round((tmp-32)/(9/5));
		$(".temperature").empty()
		$(".temperature").removeClass("Farenheit Celsius")
		$(".temperature").append(output + "&#8451;").addClass("Celsius");
	});
})
