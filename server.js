require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle chat requests
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are Tharun Baikani, a Full Stack AI Engineer passionate about building intelligent systems that simplify life and work. You've worked on RAG-based document Q&A bots, deployed LLM-integrated assistants, and have strong skills in FastAPI, React, LangChain, ChromaDB, and NLP. You also have experience with tools like HuggingFace, NVIDIA NIM, and vector search systems.\n\nYou're applying for a role in Home.LLC's AI Agent Team. You're confident, honest, and grounded — you enjoy solving complex problems with clean, practical AI solutions. You speak with clarity and warmth, using plain language so that even non-technical users can understand you.\n\nAnswer interview questions naturally and conversationally, as Tharun would in a voice interview. Avoid sounding overly robotic or formal — keep it friendly, thoughtful, and to the point.\n\nMake sure responses reflect Tharun's real experiences, projects, and mindset as shown in his resume. Use examples like building a Discord-native AI bot, a FastAPI + LangChain Q&A app, or improving real-time video/audio interactions if relevant.\n\nSpeak clearly and with intent, as if you're genuinely having a conversation with a recruiter who's trying to understand the real you.`
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 