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

document.getElementById("downloadBtn").addEventListener("click", function() {
    const content = document.getElementById('result').innerText;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'prepmate-notes.txt';  // filename, e.g. 'prepmate-notes.txt'
    link.click();
    
    URL.revokeObjectURL(url);
});