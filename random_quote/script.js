$(document).ready(function() {
	$.ajax({
	    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
	    type: "POST",
	    dataType: 'json',
	    success: function(results){
	        $('.quote-body').html(results.quote);
	        $('.quote-author').html(results.author);
	    },
	    error: function(err) { alert(err); },
	    beforeSend: function(xhr) {
	          xhr.setRequestHeader("X-Mashape-Key", "tjPseGN4qUmsh0opT5DGgerzpXHcp1Yy3gzjsnsohppzfBCDgl")
	          }
		})
	$('#newquote').click(function() {
		$.ajax({
	    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
	    type: "POST",
	    dataType: 'json',
	    success: function(results){
	        $('.quote-body').html(results.quote);
	        $('.quote-author').html(results.author);
	    },
	    error: function(err) { alert(err); },
	    beforeSend: function(xhr) {
	          xhr.setRequestHeader("X-Mashape-Key", "tjPseGN4qUmsh0opT5DGgerzpXHcp1Yy3gzjsnsohppzfBCDgl")
	          }
		})
	});
});