function logMessage() {
	fetch('/log?message=sample-node%20test%20log%20message').then((resp) => {
		alert("A message has been logged to the console of sample-node")
	})
}

function init() {
	document.getElementById('log-message-button').onclick = logMessage
}