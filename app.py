from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def explain():
    data = request.get_json()
    topic = data.get('topic')

    

    prompt = f"Explain the topic '{topic}' clearly for a student preparing for exams. Structure your answer with clear headings, bold key terms, and bullet points where useful. Keep it well-organized and easy to scan."
    model = genai.GenerativeModel('gemini-2.5-flash')
    response = model.generate_content(prompt)

    return jsonify({'explanation':response.text})

if __name__ == '__main__':
    app.run(debug=True)