$(document).ready(function() {
	$(".colon").hide();
	$(".seconds").hide();
	$("#plus").click(function() {
		var time = parseInt($(".minutes").text());
		$(".minutes").html(time+1);
		$(".colon").hide();
		$(".seconds").hide();
	});
	$("#minus").click(function() {
		var time = parseInt($(".minutes").text());
		if (time >0) {
			$(".minutes").html(time-1);
			$(".colon").hide();
			$(".seconds").hide();
		};
	});
	$("#start").click(function() {
		$('.timeup').html('');
		var time = new Date();
		time.setMinutes(parseInt($(".minutes").text()));
		time.setSeconds(parseInt($(".seconds").text()));
		$(".colon").show();
		$(".seconds").show();
		if (time.getMinutes()===0 & time.getSeconds()===0) {
			$(".timeup").html("Time's Up!")
			window.clearInterval(myTimer);
		}
		else {
			var myTimer = setInterval(timeUpdate, 1000);
		}
		function timeUpdate() {
			time.setSeconds(time.getSeconds() - 1);
			$(".minutes").html(time.getMinutes());
			if (time.getSeconds() <10) {
				$(".seconds").html('0' + time.getSeconds());
			}
			else {
				$(".seconds").html(time.getSeconds());
			};
		};
		$("#stop").click(function() {
		window.clearInterval(myTimer);
		});
		$("#reset").click(function() {
		window.clearInterval(myTimer)
		$(".minutes").html(25);
		$(".seconds").html('00');
		$(".colon").hide();
		$(".seconds").hide();
		});
	});
})