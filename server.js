require('dotenv').config();
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const OpenAI = require('openai');

const app = express();
const PORT = process.env.PORT || 3000;

// OpenAI Configuration
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'MISSING_KEY'
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

// Database Setup
const DB_PATH = process.env.DATABASE_URL || './career_hq.db';
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) console.error('Database connection error:', err.message);
    else console.log(`Connected to the FALCON database at ${DB_PATH}`);
});

// Initialize Tables
db.serialize(() => {
    // Stage-specific outcome progress
    db.run(`CREATE TABLE IF NOT EXISTS progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        domain_id TEXT,
        stage_id INTEGER,
        outcome_id INTEGER,
        status BOOLEAN,
        UNIQUE(domain_id, stage_id, outcome_id)
    )`);

    // Mission (Activity, Assessment, Build) progress
    db.run(`CREATE TABLE IF NOT EXISTS missions (
        domain_id TEXT,
        stage_id INTEGER,
        activity_status TEXT DEFAULT 'pending',
        assessment_status TEXT DEFAULT 'pending',
        assessment_score INTEGER DEFAULT 0,
        build_status TEXT DEFAULT 'pending',
        PRIMARY KEY(domain_id, stage_id)
    )`);

    // Mastered items summary for dashboard
    db.run(`CREATE TABLE IF NOT EXISTS user_stats (
        user_id TEXT PRIMARY KEY,
        total_xp INTEGER DEFAULT 0,
        rank TEXT DEFAULT 'Novice'
    )`);
});

// --- API Endpoints ---

// 1. Auth Mock
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt for user: ${username}`);
    if (username === 'architect' && password === 'launch-2026') {
        console.log('Login successful');
        res.json({ success: true, message: 'Authenticated' });
    } else {
        console.log('Login failed: Invalid credentials');
        res.status(401).json({ success: false, message: 'Signal Mismatch' });
    }
});

// 2. Get Progress for a Domain
app.get('/api/progress', (req, res) => {
    const { domain } = req.query;
    db.all("SELECT * FROM progress WHERE domain_id = ?", [domain], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// 3. Update Outcome Progress
app.post('/api/progress/update', (req, res) => {
    const { domain_id, stage_id, outcome_id, status } = req.body;
    db.run(`INSERT INTO progress (domain_id, stage_id, outcome_id, status) 
            VALUES (?, ?, ?, ?) 
            ON CONFLICT(domain_id, stage_id, outcome_id) 
            DO UPDATE SET status = EXCLUDED.status`,
        [domain_id, stage_id, outcome_id, status], (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        });
});

// 4. Get Mission Data for a Domain
app.get('/api/missions', (req, res) => {
    const { domain } = req.query;
    db.all("SELECT * FROM missions WHERE domain_id = ?", [domain], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// 5. Update Mission Status
app.post('/api/missions/update', (req, res) => {
    const { domain_id, stage_id, type, status, score } = req.body; // type: 'activity', 'assessment', 'build'
    const column = `${type}_status`;
    const scoreVal = score !== undefined ? score : 0;

    db.run(`INSERT INTO missions (domain_id, stage_id, ${column}, assessment_score) 
            VALUES (?, ?, ?, ?) 
            ON CONFLICT(domain_id, stage_id) 
            DO UPDATE SET ${column} = EXCLUDED.${column}, 
                          assessment_score = CASE WHEN ? = 'assessment' THEN EXCLUDED.assessment_score ELSE assessment_score END`,
        [domain_id, stage_id, status, scoreVal, type], (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        });
});

// 6. Dashboard Stats API
app.get('/api/dashboard/stats', (req, res) => {
    db.all(`
        SELECT 
            (SELECT COUNT(*) FROM progress WHERE status = 1) as completed_outcomes,
            (SELECT COUNT(DISTINCT domain_id) FROM missions WHERE activity_status = 'completed' OR assessment_status = 'completed' OR build_status = 'completed') as active_domains,
            (SELECT COUNT(*) FROM missions WHERE activity_status = 'completed') as activities_done,
            (SELECT COUNT(*) FROM missions WHERE assessment_status = 'completed') as assessments_done,
            (SELECT COUNT(*) FROM missions WHERE build_status = 'completed') as builds_done
    `, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows[0]);
    });
});

// 7. Reset All
app.post('/api/system/reset', (req, res) => {
    db.serialize(() => {
        db.run("DELETE FROM progress");
        db.run("DELETE FROM missions");
    });
    res.json({ success: true });
});

// 8. AI Career Guide Interface (ChatGPT Integration)
app.post('/api/ai/guide', async (req, res) => {
    const { message } = req.body;
    const msg = message.toLowerCase();

    // 1. Fallback Logic (Keyword Mapping)
    let fallbackSuggestion = null;
    let fallbackResponse = "I've analyzed your signal. The career frequency you're describing is specialized. Could you provide more details?";

    if (msg.includes('python') || msg.includes('java')) fallbackSuggestion = 'software-dev';
    else if (msg.includes('web') || msg.includes('html') || msg.includes('react')) fallbackSuggestion = 'web-dev';
    else if (msg.includes('security') || msg.includes('hack')) fallbackSuggestion = 'cyber-analyst';
    else if (msg.includes('cloud') || msg.includes('aws')) fallbackSuggestion = 'cloud-eng';
    else if (msg.includes('data') || msg.includes('analyze')) fallbackSuggestion = 'data-analyst';
    else if (msg.includes('ai') || msg.includes('neural') || msg.includes('chatbot')) fallbackSuggestion = 'ai-engineer';
    else if (msg.includes('mobile') || msg.includes('app')) fallbackSuggestion = 'mobile-dev';
    else if (msg.includes('devops') || msg.includes('docker')) fallbackSuggestion = 'devops-eng';

    // 2. ChatGPT Logic
    if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_actual_key_here') {
        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are the FALCON AI Career Guide. Analyze the user's skills and interests. Recommend exactly ONE of these domain IDs: software-dev, web-dev, mobile-dev, cyber-analyst, cloud-eng, devops-eng, data-analyst, data-scientist, business-analyst, ai-engineer, ml-engineer. Return a JSON object: { \"response\": \"your professional advice here\", \"suggestion\": \"domain-id\" }." },
                    { role: "user", content: message }
                ],
                response_format: { type: "json_object" }
            });

            const result = JSON.parse(completion.choices[0].message.content);
            return res.json(result);
        } catch (err) {
            console.error("ChatGPT API Error:", err.message);
            // On error, proceed to fallback
        }
    }

    // Default Fallback Response
    if (fallbackSuggestion) {
        fallbackResponse = `Based on your technical signal, I recommend exploring the **${fallbackSuggestion.replace('-', ' ').toUpperCase()}** deployment path.`;
    }
    res.json({ response: fallbackResponse, suggestion: fallbackSuggestion });
});

app.get('*', (req, res) => {
    // Prevent serving index/login HTML for missing static assets
    if (req.path.includes('.') && !req.path.endsWith('.html')) {
        return res.status(404).send('Asset not found');
    }
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(PORT, () => {
    console.log(`FALCON Command Center live at http://localhost:${PORT}`);
});
