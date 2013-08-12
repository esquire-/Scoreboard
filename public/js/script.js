function sendRequest() {
	var response;
	var request = new XMLHttpRequest();
	var location = "/score";
	request.open("GET", location);
	request.onreadystatechange = function() {
		var done = 4, ok = 200;
		if(request.readyState == done && request.status == ok) {
			response = JSON.parse(request.responseText);
			updateBoard(response);
		}
	}
	request.send();
}

function updateBoard(r) {
	document.getElementById('p1').innerHTML = r.p1;
	document.getElementById('p2').innerHTML = r.p2;
	document.getElementById('n1').innerHTML = r.n1;
	document.getElementById('n2').innerHTML = r.n2;
}

window.onload = function() {
	var t = setInterval(sendRequest, 2500);
}