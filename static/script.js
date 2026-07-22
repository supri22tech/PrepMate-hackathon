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
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const lines = doc.splitTextToSize(content, 180);  // wraps text to fit page width
    doc.text(lines, 10, 10);  // x=10, y=10 starting position
    
    doc.save('prepmate-notes.pdf');  // filename, e.g. 'prepmate-notes.pdf'
});