document.getElementById("ExplainButton").addEventListener("click",async function() {
    const topic = document.getElementById('topicInput').value;
    
    const response = await fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ topic: topic })
    });

    const data = await response.json();

    document.getElementById('result').innerHTML = marked.parse(data.explanation);
});