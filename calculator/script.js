$(document).ready(function() {
	$('#clear').click(function() {
		$('#field').val('');
	});
	$('#sign').click(function() {
		var field = $('#field').val();
		$('#field').val(field*-1);
	});
	$('#percent').click(function() {
		var field = $('#field').val();
		$('#field').val(field*.01);
	});
	$('#decimal').click(function() {
		var field = $('#field').val();
		$('#field').val(field + '.');
	});
	$('#zero').click(function() {
		var field = $('#field').val();
		$('#field').val(field + 0);
	});
	$('#one').click(function() {
		var field = $('#field').val();
		$('#field').val(field + 1);
	});
	$('#two').click(function() {
		var field = $('#field').val();
		$('#field').val(field + 2);
	});
	$('#three').click(function() {
		var field = $('#field').val();
		$('#field').val(field + 3);
	});
	$('#four').click(function() {
		var field = $('#field').val();
		$('#field').val(field + 4);
	});
	$('#five').click(function() {
		var field = $('#field').val();
		$('#field').val(field + 5);
	});
	$('#six').click(function() {
		var field = $('#field').val();
		$('#field').val(field + 6);
	});
	$('#seven').click(function() {
		var field = $('#field').val();
		$('#field').val(field + 7);
	});
	$('#eight').click(function() {
		var field = $('#field').val();
		$('#field').val(field + 8);
	});
	$('#nine').click(function() {
		var field = $('#field').val();
		$('#field').val(field + 9);
	});
	$('#multiply').click(function() {
		var field = $('#field').val();
		$('#field').val(field + '*');
	});
	$('#divide').click(function() {
		var field = $('#field').val();
		$('#field').val(field + '/');
	});
	$('#add').click(function() {
		var field = $('#field').val();
		$('#field').val(field + '+');
	});
	$('#subtract').click(function() {
		var field = $('#field').val();
		$('#field').val(field + '-');
	});
	$('#equal').click(function() {
		var field = $('#field').val();
		$('#field').val(eval(field));
	})
})