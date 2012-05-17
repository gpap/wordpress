function toggleOptions(parentOption, childOptions) {
	var display = '';

	if (document.getElementById(parentOption).checked == false) {
		display = 'none';
	}
	for (var i = 0; i < childOptions.length; i++) {
		console.log(childOptions[i]);
		console.log(document.getElementById(childOptions[i]));
		document.getElementById(childOptions[i]).style.display = display;
	}
}

function authFacebook() {
	FB.login(function(response) {
		if (response.authResponse) {
			window.location.reload();
		} else {
			console.log('User cancelled login or did not fully authorize.');
		}
	}, {scope: 'manage_pages, publish_actions, publish_stream'});
}

jQuery(function() {
	jQuery("#suggest-friends").suggest("?fb-friends=1",{
		minChars: 1,
		useDelimiter: true,
		selectFirst: true,
		autoFill: true,
		multiple: true,
		//onSelect: function() {alert("You selected: " + this.value)},
    processData: function(data) {
			var i, processed = [];
			for (i=0; i < data.length; i++) {
				processed.push([data[i][0] + " - " + data[i][1]]);
			}
			return processed;
		}});
});

jQuery(function() {
	jQuery("#suggest-pages").suggest("?fb-pages=1",{
		minChars: 1,
		useDelimiter: true,
		selectFirst: true,
		autoFill: true,
		multiple: true,
		//onSelect: function() {alert("You selected: " + this.value)},
    processData: function(data) {
			var i, processed = [];
			for (i=0; i < data.length; i++) {
				processed.push([data[i][0] + " - " + data[i][1]]);
			}
			return processed;
		}});
});