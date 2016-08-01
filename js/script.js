$(function() {

	$('a.pop').click(function(e) {
		e.preventDefault();
	});

	$('a.pop').popover();

	$('[rel="book_tickets"]').tooltip();
  $('[rel="tweets"]').tooltip();

});
