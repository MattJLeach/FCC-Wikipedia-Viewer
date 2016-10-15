$(function() {
	
	$('#search').bind("enterKey", function(e) {
		
		var searchWord = $('#search').val();

		$.ajax({
			url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchWord + "&format=json",
			type: "GET",
			dataType: "jsonp",
			success: function(data) {
				// Code for successful AJAX call

				$('#result').html('');

				for( var i = 0; i < data[1].length; i++) {
					$('#result').append('<a href="' + data[3][i] + '" target="_blank"><div class="result-item"><h3>' + data[1][i] + '</h3><p>' + data[2][i] + '</div></a>');
				}

			},
			error: function(err) {
				alert("Error");
			}
		});

	});
	$('#search').keyup(function(e) {
		if(e.keyCode == 13) {
			$(this).trigger("enterKey");
		}
	});



});