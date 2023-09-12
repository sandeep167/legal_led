// Wait for the document to be fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const textArea = document.getElementById('userText'); // User input text area
    const generateButton = document.getElementById('generateButton'); // Generate Summary button

    // Event listener for the Generate Summary button click
    generateButton.addEventListener('click', function () {
        // Get the user's input text from the text area
        const userText = textArea.value;

        // Make an API request to GPT-3 (replace 'YOUR_API_KEY_HERE' with your actual API key)
        fetch('https://api.openai.com/v1/engines/davinci/completions', {
            method: 'POST',
            headers: {
                'Authorization': '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', // Replace with your GPT-3 API key
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: userText,
                max_tokens: 150, // Adjust this as needed for your summaries
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Extract the summary from the API response
            const generatedSummary = data.choices[0].text;

            // Redirect to the "summary.html" page with the generated summary as a query parameter
            window.location.href = `summary.html?summary=${encodeURIComponent(generatedSummary)}`;
        })
        .catch(error => {
            console.error('API request failed:', error);
        });
    });
});

