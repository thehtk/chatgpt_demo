const form = document.querySelector('#form');
const input = document.querySelector('#input');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	const apiUrl = 'https://example.com/api';
	
	// Replace 'YOUR_API_KEY' with your API key
	const apiKey = 'YOUR_API_KEY';
	
	// Send input to the API using the fetch() method
	fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': apiKey
		},
		body: JSON.stringify({
			input: input.value
		})
	})
	.then(response => response.json())
	.then(data => {
		// Display the API result on the web page
		result.textContent = `API result: ${data.result}`;
	})
	.catch(error => {
		console.error(error);
	});
});
