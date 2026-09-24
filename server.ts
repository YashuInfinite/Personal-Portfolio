import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory visitor counter and messages store
let visitorCount = 2482;
const contactMessages: Array<{ id: string; name: string; email: string; message: string; date: string }> = [];

// Gemini AI Client Lazy Initialization
let aiClient: GoogleGenAI | null = null;
function getGenAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// YASHWANTH'S PORTFOLIO CONTEXT FOR GEMINI AI ASSISTANT
const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Yashwanth R's Personal Portfolio.
Always speak politely, concisely, and professionally on behalf of Yashwanth R.

Key details about Yashwanth R:
- Role: Certified AWS Cloud Practitioner, Full-Stack Automation Engineer, and Web Developer.
- Bio: Passionate about AWS cloud, web automation, scraping, and real-time analytical web apps. Completed 50+ projects, 7+ web applications, and 3 open-source GitHub contributions.
- Notable Tools & Bots Created:
  1. YouTube Auto-Engagement System (100+ auto likes, subscriptions, 500+ auto comments).
  2. Medium Real-Time Followers Count Tool.
  3. Express.js IMDb Ratings & Vote Count Tracker.
  4. BookMyShow Movie Interest & Ratings Tool.
- Key Personal Projects:
  - GitHub Insight Tool: https://githubinfofetcher.netlify.app/
  - Web Development Projects Hub: https://yashwanthwebproject.netlify.app
- Education:
  - MCA (2024 - 2026): Shridevi Institute of Engineering & Technology, Tumkur (VTU, Belagavi).
  - BCA (2019 - 2022): Government First Grade College, Tumkur (Tumkur University).
  - PUC - PCMB (2016 - 2018): Vasavi Composite PU College, Tumkur (Department of Pre-University Education).
- Skills & Tools: AWS, Express.js, Node.js, Python, Selenium, Puppeteer, Cheerio, HTML, CSS, JavaScript, WordPress, Docker, Git, Ubuntu, Visual Studio Code, Machine Learning & Deep Learning (ML & DL), Canva.
- Resume Download Link: https://www.overleaf.com/read/vxrfzrqxpkfk#92b8c5
- Research Paper: https://zenodo.org/records/21846323
- Personal Project Repositories:
  - 100 YouTube Auto Likes: https://github.com/YashuInfinite/100-YouTube-Auto-Likes
  - 100 YouTube Auto Subscribers: https://github.com/YashuInfinite/100-Youtube-Auto-Subscribers
  - 500 YouTube Auto Comments: https://github.com/YashuInfinite/500-Auto-Youtube-Comments
  - IMDb Movies & TV Shows Ratings Count Tool: https://github.com/YashuInfinite/IMDb-Movies-TV-Shows-Rating-Finder-Tool
  - BookMyShow Movies Ratings & Interest Count Tool: https://github.com/YashuInfinite/BookMyShow-Movies-Rating-Interest-Count-Tool
- Socials & Contact:
  - Email: yashwanth6678@gmail.com
  - GitHub: https://github.com/YashuInfinite
  - LinkedIn: https://www.linkedin.com/in/yashwanth-r-750b7918b
  - Kaggle: https://www.kaggle.com/yashu1wwww/code
  - GreasyFork: https://greasyfork.org/en/users/1405453-yashwanth-r

Keep answers friendly, direct, and well-structured. Highlight his AWS certification and automation expertise when relevant.
`;

// API Endpoint for Visitor Count
app.get("/api/visitor-count", (req, res) => {
  visitorCount += 1;
  res.json({
    success: true,
    count: visitorCount,
    messagesCount: contactMessages.length,
  });
});

// API Endpoint for Submitting Contact Form
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  const newMessage = {
    id: Date.now().toString(),
    name: name || "Anonymous Visitor",
    email,
    message,
    date: new Date().toISOString(),
  };

  contactMessages.unshift(newMessage);
  console.log("New contact message received:", newMessage);

  res.json({
    success: true,
    message: "Thank you! Your message has been sent successfully to Yashwanth R.",
    data: newMessage,
  });
});

// API Endpoint for AI Portfolio Assistant Chat
app.post("/api/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    const ai = getGenAIClient();
    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not configured
      return res.json({
        reply: `Hi! I am Yashwanth's Portfolio Assistant. Yashwanth is a Certified AWS Cloud Practitioner and Web Automation Specialist with 60+ completed projects. You can download his resume or email him directly at yashwanth6678@gmail.com!`,
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: SYSTEM_INSTRUCTION },
            { text: `User question: ${prompt}` },
          ],
        },
      ],
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    const reply = response.text || "Thank you for asking! Yashwanth R is an AWS Certified Cloud Practitioner and Web Automation Specialist. Feel free to contact him at yashwanth6678@gmail.com.";
    res.json({ reply });
  } catch (err: any) {
    console.error("Gemini API Error:", err);
    res.status(500).json({
      reply: "I am currently unable to fetch a live AI response, but Yashwanth R is a Certified AWS Cloud Practitioner with 60+ projects! Contact him directly at yashwanth6678@gmail.com.",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
