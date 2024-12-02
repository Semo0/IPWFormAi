document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('predictForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input value from the form
        const inputValue = document.getElementById('inputField').value;

        // Convert input to a list of numbers
        //const features = inputValue.split(',').map(Number);

        // Send input to Flask API
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: inputValue })
        })
        .then(response => response.json())
        .then(data => {
            // Redirect to result page with the prediction
            // Display the prediction
            console.log(data.prediction);
            if (data) {
                document.getElementById('result').innerText = 
                    `Predicted Value: ${data.prediction}`;
            } else if (result.error) {
                document.getElementById('result').innerText = 
                    `Error: ${result.error}`;
            }
            sessionStorage.setItem('prediction', data.prediction);
            sessionStorage.setItem('title', inputValue);
            window.location.href = `result.html`;
        })
        .catch(error => console.error('Error:', error));
    });
});
