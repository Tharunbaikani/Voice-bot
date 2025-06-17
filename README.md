# Interview Voice Bot

A simple voice bot that responds to interview questions using ChatGPT's API.

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`

## Features

- Simple and intuitive user interface
- Voice recording capability
- Text-to-speech responses
- Real-time chat interface
- Powered by ChatGPT for natural responses

## Usage

1. Click the "Start Recording" button to begin recording your question
2. Click "Stop Recording" when you're done
3. The bot will process your question and respond both in text and voice

## Note

This is a demo version that uses mock transcription for demonstration purposes. In a production environment, you would want to integrate with a proper speech-to-text service like Google Cloud Speech-to-Text or Azure Speech Services. 