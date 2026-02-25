/**
 * FALCON — Application Core
 * Future-Aware Learning & Career Orchestration Network
 */

const API_BASE = '';

const DOMAINS = {
    'software-dev': { name: 'Software Developer', icon: '💻', keywords: 'python java c++ software architecture algorithms coding back end express node' },
    'web-dev': { name: 'Web Developer', icon: '🌐', keywords: 'html css javascript react node backend frontend fullstack website mern mean' },
    'mobile-dev': { name: 'Mobile App Developer', icon: '📱', keywords: 'ios android react native flutter swift kotlin mobile app application' },
    'cyber-analyst': { name: 'Cybersecurity Analyst', icon: '🛡️', keywords: 'security defense hacking network pentest ethical hacker firewall ids ips' },
    'cloud-eng': { name: 'Cloud Engineer', icon: '☁️', keywords: 'aws azure gcp devops infrastructure serverless cloud scaling s3 ec2' },
    'devops-eng': { name: 'DevOps Engineer', icon: '♾️', keywords: 'cicd docker kubernetes terraform automation pipeline ansible' },
    'data-analyst': { name: 'Data Analyst', icon: '📊', keywords: 'excel sql tableau powerbi analytics visualization bi reporting pandas' },
    'data-scientist': { name: 'Data Scientist', icon: '🧪', keywords: 'machine learning statistics python r analytics modeling big data scikit' },
    'business-analyst': { name: 'Business Analyst', icon: '💼', keywords: 'requirements process management strategy scrum product owner agile' },
    'ai-engineer': { name: 'AI Engineer', icon: '🧠', keywords: 'openai chatbot llm neural networks generative ai nlp gpt vertex langchain' },
    'ml-engineer': { name: 'Machine Learning Engineer', icon: '🤖', keywords: 'tensorflow pytorch deep learning models deployment training' }
};

function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, m => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
}

const MISSION_TEMPLATES = {
    'software-dev': [
        {
            title: 'Stage 1: Foundations',
            summary: 'Master the syntax and core logic of modern programming languages.',
            articles: [{ name: 'Intro to Algorithms', url: 'https://en.wikipedia.org/wiki/Algorithm' }],
            blogs: [{ name: 'Clean Code Principles', url: 'https://blog.cleancoder.com/' }],
            topics: ['Programming Basics (C / Python / Java)', 'OOP Concepts', 'Git & GitHub'],
            assessment: {
                questions: [
                    { q: 'What does "DRY" stand for in coding?', options: ['Don\'t Repeat Yourself', 'Do Repeat Yearly', 'Data Retrieval Yield', 'Digital Resource Yard'], a: 0 },
                    { q: 'Which of these is a popular version control system?', options: ['Docker', 'Git', 'Kubernetes', 'Babel'], a: 1 },
                    { q: 'What does OOP stand for?', options: ['Object Oriented Programming', 'Online Official Protocol', 'Option Only Programming', 'Open Output Process'], a: 0 },
                    { q: 'Which language is primarily used for Android development?', options: ['Swift', 'Kotlin', 'PHP', 'Ruby'], a: 1 },
                    { q: 'What is a "boolean"?', options: ['A type of loop', 'A data type with two values', 'A function name', 'A CSS property'], a: 1 }
                ]
            }
        },
        {
            title: 'Stage 2: Intermediate',
            summary: 'Bridge the gap between code and systems with data structures and APIs.',
            articles: [{ name: 'API Design Best Practices', url: 'https://restfulapi.net/' }],
            blogs: [{ name: 'The Engineering Manager Blog', url: 'https://www.theengineeringmanager.com/' }],
            topics: ['Data Structures & Algorithms', 'Web Development Basics', 'APIs', 'Databases'],
            assessment: {
                questions: [
                    { q: 'Which data structure follows LIFO?', options: ['Queue', 'Stack', 'Linked List', 'Tree'], a: 1 },
                    { q: 'What does REST stand for?', options: ['Representational State Transfer', 'Responsive Server Technique', 'Reliable Stat Tracker', 'Remote System Tool'], a: 0 },
                    { q: 'What is a Primary Key in a database?', options: ['A unique identifier for a record', 'The first column in a table', 'A password for the database', 'A link to another table'], a: 0 },
                    { q: 'Which of these is a NoSQL database?', options: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle'], a: 2 },
                    { q: 'In an API, what does a 404 status code mean?', options: ['Success', 'Server Error', 'Not Found', 'Forbidden'], a: 2 }
                ]
            }
        },
        {
            title: 'Stage 3: Advanced',
            summary: 'Architect large-scale, distributed systems with high reliability.',
            articles: [{ name: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' }],
            blogs: [{ name: 'Netflix Tech Blog', url: 'https://netflixtechblog.com/' }],
            topics: ['System Design', 'Backend Architecture', 'Testing & Optimization', 'Large-scale Projects'],
            assessment: {
                questions: [
                    { q: 'What is Horizontal Scaling?', options: ['Adding more power to a machine', 'Adding more machines to a system', 'Increasing depth of the database', 'Optimizing code speed'], a: 1 },
                    { q: 'What is a "Load Balancer"?', options: ['A tool to balance disk space', 'A system to distribute traffic', 'A database optimization tool', 'A type of compiler'], a: 1 },
                    { q: 'Which of these is a microservices pattern?', options: ['Singleton', 'API Gateway', 'MVC', 'Observer'], a: 1 },
                    { q: 'What does "CI" in CI/CD stand for?', options: ['Continuous Integration', 'Code Inspection', 'Central Interface', 'Constant Improvement'], a: 0 },
                    { q: 'What is the purpose of Docker?', options: ['To compile code', 'To containerize applications', 'To design UI', 'To manage domains'], a: 1 }
                ]
            }
        }
    ],
    'web-dev': [
        {
            title: 'Stage 1: Foundations',
            summary: 'Build the skeleton and skin of the modern web.',
            articles: [{ name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' }],
            blogs: [{ name: 'CSS-Tricks', url: 'https://css-tricks.com/' }],
            topics: ['HTML', 'CSS', 'JavaScript'],
            assessment: {
                questions: [
                    { q: 'Which tag is used for the largest heading?', options: ['<head>', '<h6>', '<h1>', '<div>'], a: 2 },
                    { q: 'What does CSS stand for?', options: ['Colorful Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Core Style System'], a: 1 },
                    { q: 'Which JS keyword is used to declare a constant?', options: ['var', 'let', 'const', 'fix'], a: 2 },
                    { q: 'How do you link an external CSS file?', options: ['<script>', '<link>', '<style>', '<href>'], a: 1 },
                    { q: 'What does HTML stand for?', options: ['HyperText Markup Language', 'High Tech Modern Language', 'Hyperlink Transfer Method', 'Home Tool Markup Language'], a: 0 }
                ]
            }
        },
        {
            title: 'Stage 2: Intermediate',
            summary: 'Create dynamic, interactive user experiences with modern frameworks.',
            articles: [{ name: 'React Patterns', url: 'https://reactpatterns.com/' }],
            blogs: [{ name: 'Overreacted', url: 'https://overreacted.io/' }],
            topics: ['React / Angular', 'REST APIs', 'Node.js', 'MongoDB / SQL'],
            assessment: {
                questions: [
                    { q: 'In React, what are "props"?', options: ['Internal state', 'Methods to change state', 'Inputs to a component', 'CSS properties'], a: 2 },
                    { q: 'Which hook is used for side effects in React?', options: ['useState', 'useContext', 'useEffect', 'useReducer'], a: 2 },
                    { q: 'What is the Virtual DOM?', options: ['A direct copy of the UI', 'An in-memory representation of the UI', 'A backup of the website', 'A server-side rendering tool'], a: 1 },
                    { q: 'Which command starts a development server in Vite?', options: ['npm run start', 'npm run dev', 'npm run build', 'npm run server'], a: 1 },
                    { q: 'What is JSX?', options: ['A database format', 'A syntax extension for JavaScript', 'A CSS preprocessor', 'A type of API'], a: 1 }
                ]
            }
        },
        {
            title: 'Stage 3: Advanced',
            summary: 'Deploy full-stack applications to high-availability environments.',
            articles: [{ name: 'Web Performance Optimization', url: 'https://web.dev/fast/' }],
            blogs: [{ name: 'Vercel Blog', url: 'https://vercel.com/blog' }],
            topics: ['Full-stack Projects', 'Authentication Systems', 'Performance Optimization', 'Deployment (Vercel, AWS)'],
            assessment: {
                questions: [
                    { q: 'Which tool is commonly used for CI/CD pipelines?', options: ['GitHub Actions', 'VS Code', 'React Router', 'Redux'], a: 0 },
                    { q: 'What is Server-Side Rendering (SSR)?', options: ['Rendering code on the client', 'Rendering code on the server', 'Rendering code in the database', 'Caching images'], a: 1 },
                    { q: 'What is the purpose of JWT?', options: ['Database indexing', 'Web styling', 'Secure authentication', 'Image compression'], a: 2 },
                    { q: 'Which header is used for Authorization?', options: ['Content-Type', 'Authorization', 'User-Agent', 'Accept'], a: 1 },
                    { q: 'What is a CDN?', options: ['Content Delivery Network', 'Code Deployment Node', 'Central Data Network', 'Cloud Design Node'], a: 0 }
                ]
            }
        }
    ],
    'cyber-analyst': [
        {
            title: 'Stage 1: Foundations',
            summary: 'Learn the defensive perimeter of digital infrastructure.',
            articles: [{ name: 'Cybersecurity 101', url: 'https://www.comptia.org/content/articles/what-is-cybersecurity' }],
            blogs: [{ name: 'Krebs on Security', url: 'https://krebsonsecurity.com/' }],
            topics: ['Networking Basics', 'Linux Basics', 'Cybersecurity Fundamentals'],
            assessment: {
                questions: [
                    { q: 'What does VPN stand for?', options: ['Virtual Private Network', 'Visible Private Node', 'Vector Port Node', 'Virus Protection Network'], a: 0 },
                    { q: 'Which layer of the OSI model does a router operate on?', options: ['Data Link', 'Network', 'Transport', 'Session'], a: 1 },
                    { q: 'What is Phishing?', options: ['A type of network scan', 'A social engineering attack', 'A hardware failure', 'A database query'], a: 1 },
                    { q: 'Which protocol is secure for web browsing?', options: ['HTTP', 'FTP', 'HTTPS', 'Telnet'], a: 2 },
                    { q: 'What is the purpose of a Firewall?', options: ['To speed up internet', 'To block unauthorized access', 'To store passwords', 'To cool down servers'], a: 1 }
                ]
            }
        },
        {
            title: 'Stage 2: Intermediate',
            summary: 'Perform active internal testing and ethical hacking.',
            articles: [{ name: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' }],
            blogs: [{ name: 'The Hacker News', url: 'https://thehackernews.com/' }],
            topics: ['Ethical Hacking', 'Penetration Testing', 'Security Tools (Wireshark, Metasploit)'],
            assessment: {
                questions: [
                    { q: 'Which tool is used for packet sniffing?', options: ['Nmap', 'Wireshark', 'Metasploit', 'Nessus'], a: 1 },
                    { q: 'What is SQL Injection?', options: ['A database backup method', 'A code injection technique', 'A styling method', 'A networking protocol'], a: 1 },
                    { q: 'What is Nmap used for?', options: ['Packet sniffing', 'Network discovery and scanning', 'Password cracking', 'Writing code'], a: 1 },
                    { q: 'What does "Brute Force" mean in security?', options: ['Using physical force', 'Attempting every possible password', 'A fast network connection', 'A strong encryption'], a: 1 },
                    { q: 'What is a "Honey Pot"?', options: ['A delicious snack', 'A decoy system to lure attackers', 'A type of virus', 'A secure database'], a: 1 }
                ]
            }
        },
        {
            title: 'Stage 3: Advanced',
            summary: 'Secure enterprise-grade cloud environments and response triggers.',
            articles: [{ name: 'NIST Framework', url: 'https://www.nist.gov/cyberframework' }],
            blogs: [{ name: 'Dark Reading', url: 'https://www.darkreading.com/' }],
            topics: ['Security Audits', 'Incident Response', 'Cloud Security', 'Certifications (CEH, CISSP)'],
            assessment: {
                questions: [
                    { q: 'What is a Zero-Day vulnerability?', options: ['A known bug with a patch', 'An unknown vulnerability with no patch', 'A vulnerability that only exists for one day', 'A security certificate'], a: 1 },
                    { q: 'What is multi-factor authentication (MFA)?', options: ['Using multiple passwords', 'Using two or more verification methods', 'Using a long password', 'Logging in from multiple devices'], a: 1 },
                    { q: 'What does CISSP stand for?', options: ['Certified Information Systems Security Professional', 'Central Interface Social Security Protocol', 'Cloud Integrated Security System Process', 'Code Inspection Special Security Program'], a: 0 },
                    { q: 'What is Encryption?', options: ['Deleting data', 'Converting data into a secret code', 'Sorting data', 'Sharing data'], a: 1 },
                    { q: 'What is the "Minimum Privilege" principle?', options: ['Giving users all access', 'Giving users only the access they need', 'Giving users no access', 'Giving users access for one hour'], a: 1 }
                ]
            }
        }
    ]
    // ... Additional domains follow the same structure
};

// Fill missing domains with robust templates to avoid breaks
Object.keys(DOMAINS).forEach(id => {
    if (!MISSION_TEMPLATES[id]) {
        const domainName = DOMAINS[id].name;
        MISSION_TEMPLATES[id] = [
            {
                title: 'Stage 1: Foundations',
                summary: `Establish your core knowledge base as a ${domainName}.`,
                articles: [], blogs: [],
                topics: ['Industry Overview', 'Essential Tools', 'Core Concepts'],
                assessment: {
                    questions: [
                        { q: `What is the primary objective of a ${domainName}?`, options: ['To drive innovation', 'To ignore standards', 'To maximize complexity', 'To avoid testing'], a: 0 },
                        { q: 'Which quality is most valued in this role?', options: ['Consistency', 'Randomness', 'Speed over quality', 'Minimal communication'], a: 0 },
                        { q: 'Is professional growth ongoing in this sector?', options: ['Yes, continuous learning is key', 'No, once learned it stays same', 'Optional, but not recommended', 'Only for beginners'], a: 0 },
                        { q: 'What is a common tool used in this domain?', options: ['Command Line / IDE', 'Typewriter', 'Calculator', 'Fax Machine'], a: 0 },
                        { q: 'Effective problem-solving requires:', options: ['Critical Thinking', 'Guesswork', 'Blaming others', 'Ignoring errors'], a: 0 }
                    ]
                }
            },
            {
                title: 'Stage 2: Intermediate',
                summary: 'Develop deeper technical and practical skills.',
                topics: ['Advanced Methodologies', 'Collaboration Tools', 'Best Practices'],
                articles: [], blogs: [],
                assessment: {
                    questions: [
                        { q: 'Why are industry standards important?', options: ['They ensure compatibility', 'They are meant to be broken', 'They add unnecessary work', 'They limit creativity'], a: 0 },
                        { q: 'What is the role of collaboration here?', options: ['Essential for success', 'Purely optional', 'A waste of time', 'Only for managers'], a: 0 },
                        { q: 'How should one handle complex tasks?', options: ['Break them into smaller units', 'Tackle everything at once', 'Wait for someone else', 'Ignore them'], a: 0 },
                        { q: 'Version control is used for:', options: ['Tracking changes', 'Naming files', 'Installing hardware', 'Formatting text'], a: 0 },
                        { q: 'Documentation serves to:', options: ['Provide future reference', 'Fill up disk space', 'Show off writing skills', 'Hide logic'], a: 0 }
                    ]
                }
            },
            {
                title: 'Stage 3: Advanced',
                summary: 'Achieve mission-critical mastery and optimization.',
                topics: ['Architectural Strategy', 'Expert Implementation', 'Optimization'],
                articles: [], blogs: [],
                assessment: {
                    questions: [
                        { q: 'Advanced optimization focuses on:', options: ['Performance & Scalability', 'Adding more features', 'Visual flair only', 'Random changes'], a: 0 },
                        { q: 'What defines a Master in this field?', options: ['Deep expertise & mentoring', 'Knowing one tool only', 'Speed of typing', 'Years of experience only'], a: 0 },
                        { q: 'How do you ensure system reliability?', options: ['Rigorous testing', 'Hope for the best', 'Ignoring edge cases', 'Minimal updates'], a: 0 },
                        { q: 'Strategic planning involves:', options: ['Forecasting future trends', 'Focusing only on today', 'Avoiding change', 'Copying competitors'], a: 0 },
                        { q: 'Final certification signifies:', options: ['Mission Readiness', 'The end of learning', 'A piece of paper only', 'A basic understanding'], a: 0 }
                    ]
                }
            }
        ];
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    handleAuth();

    const path = window.location.pathname;

    if (path.includes('index.html') || path === '/' || path.includes('career')) {
        renderDomainHub();
        initDiscovery();
    }

    if (path.includes('dashboard.html')) {
        renderDashboard();
    }

    if (path.includes('roadmap.html')) {
        loadProgress();
    }

    if (path.includes('resources.html')) {
        renderResources();
    }

    if (path.includes('profile.html')) {
        renderProfile();
    }

    initGlobalUI();
    initChatbot();
}

function initGlobalUI() {
    document.querySelectorAll('.logout-trigger').forEach(btn => {
        btn.onclick = () => {
            localStorage.removeItem('architect_token');
            localStorage.removeItem('current_domain');
            window.location.href = 'login.html';
        };
    });

    const activeDomainId = localStorage.getItem('current_domain');
    if (activeDomainId && DOMAINS[activeDomainId]) {
        const domainText = document.getElementById('active-domain-name');
        if (domainText) domainText.innerText = DOMAINS[activeDomainId].name.toUpperCase();
    }
}

/* 1. Discovery & Domain Hub */
function initDiscovery() {
    const searchInput = document.getElementById('domain-search');
    if (searchInput) {
        searchInput.oninput = (e) => filterDomains(e.target.value);
    }
}

function filterDomains(query) {
    const grid = document.getElementById('domain-grid');
    const q = query.toLowerCase();

    const filtered = Object.entries(DOMAINS).filter(([id, data]) => {
        return data.name.toLowerCase().includes(q) || data.keywords.toLowerCase().includes(q);
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="text-align: center; grid-column: 1/-1; padding: 40px; color: var(--text-muted);">No matching domains found in FALCON frequencies.</p>`;
        return;
    }

    renderDomainCards(grid, filtered);
}

function renderDomainHub() {
    const hub = document.getElementById('domain-grid');
    if (!hub) return;
    renderDomainCards(hub, Object.entries(DOMAINS));
}

function renderDomainCards(grid, domains) {
    grid.innerHTML = domains.map(([id, data]) => `
        <div class="card domain-card fade-in" onclick="selectDomain('${id}')">
            <div style="font-size: 2.5rem; margin-bottom: 20px;">${data.icon}</div>
            <h3 class="orbitron" style="font-size: 0.9rem; margin-bottom: 15px;">${data.name}</h3>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 20px;">Launch specialized training mission for ${data.name.toLowerCase()}.</p>
            <button class="btn btn-ghost btn-start orbitron" style="font-size: 0.7rem; width: 100%; justify-content: center;">START MISSION →</button>
        </div>
    `).join('');
}

function selectDomain(id) {
    localStorage.setItem('current_domain', id);
    window.location.href = 'roadmap.html';
}

/* 2. Dashboard Rendering */
async function renderDashboard() {
    const statsContainer = document.getElementById('dashboard-stats');
    if (!statsContainer) return;

    try {
        const res = await fetch(`${API_BASE}/api/dashboard/stats`);
        const stats = await res.json();

        const totalXP = (stats.completed_outcomes || 0) * 10 + (stats.assessments_done || 0) * 100 + (JSON.parse(localStorage.getItem('falcon_certificates') || '[]').length * 500);

        statsContainer.innerHTML = `
            <div class="card" style="text-align: center; border-top: 4px solid var(--primary-blue);">
                <h2 class="orbitron" style="font-size: 2rem; color: var(--primary-blue);">${stats.active_domains || 0}</h2>
                <p class="orbitron" style="font-size: 0.7rem; opacity: 0.6;">ACTIVE DOMAINS</p>
            </div>
            <div class="card" style="text-align: center; border-top: 4px solid var(--success-green);">
                <h2 class="orbitron" style="font-size: 2rem; color: var(--success-green);">${stats.completed_outcomes || 0}</h2>
                <p class="orbitron" style="font-size: 0.7rem; opacity: 0.6;">SKILLS MASTERED</p>
            </div>
            <div class="card" style="text-align: center; border-top: 4px solid var(--accent-blue);">
                <h2 class="orbitron" style="font-size: 2rem; color: var(--accent-blue);">${totalXP}</h2>
                <p class="orbitron" style="font-size: 0.7rem; opacity: 0.6;">TOTAL XP POINTS</p>
            </div>
        `;

        renderDashboardActivePaths();
    } catch (err) {
        console.error('Dashboard Load Error:', err);
    }
}

async function renderDashboardActivePaths() {
    const list = document.getElementById('active-paths-list');
    if (!list) return;

    list.innerHTML = Object.entries(DOMAINS).slice(0, 5).map(([id, data]) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: white; border-radius: 8px;">
            <div style="display: flex; gap: 10px; align-items: center;">
                <span>${data.icon}</span>
                <span class="orbitron" style="font-size: 0.75rem;">${data.name}</span>
            </div>
            <button onclick="selectDomain('${id}')" style="background: var(--light-blue); border: none; padding: 4px 12px; border-radius: 4px; font-size: 0.65rem; color: var(--primary-blue); cursor: pointer; font-family: 'Orbitron';">RESUME →</button>
        </div>
    `).join('');
}

/* 3. Progress Tracking & Roadmap */
async function loadProgress() {
    const domainId = localStorage.getItem('current_domain');
    if (!domainId) {
        window.location.href = 'index.html';
        return;
    }

    try {
        const progRes = await fetch(`${API_BASE}/api/progress?domain=${domainId}`);
        const progress = await progRes.json();
        renderRoadmapContent(domainId, progress);
    } catch (err) {
        console.error('Failed to load progress:', err);
        renderRoadmapContent(domainId, []);
    }
}

let currentQuiz = null;

async function renderRoadmapContent(domainId, progress) {
    const container = document.getElementById('mission-container');
    if (!container) return;

    const stages = MISSION_TEMPLATES[domainId] || [];
    let nextFound = false;

    try {
        const res = await fetch(`${API_BASE}/api/missions?domain=${domainId}`);
        const missionData = await res.json();

        container.innerHTML = stages.map((stage, sIdx) => {
            const stageId = sIdx + 1;
            const mission = missionData.find(m => m.stage_id === stageId) || {};
            const isAssessmentDone = mission.assessment_status === 'completed';
            const score = mission.assessment_score || 0;

            const summaryHTML = stage.summary ? `<p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px;">${stage.summary}</p>` : '';
            const linksHTML = (stage.articles || []).concat(stage.blogs || []).map(link =>
                `<a href="${link.url}" target="_blank" style="font-size: 0.7rem; color: var(--primary-blue); text-decoration: underline; margin-right: 15px;">🔗 ${link.name}</a>`
            ).join('') || '';

            const topicsHTML = stage.topics.map((topic, tIdx) => {
                const outcomeId = tIdx + 1;
                const isCompleted = progress.some(p => p.stage_id === stageId && p.outcome_id === outcomeId && p.status);

                let classes = 'topic-item card';
                let statusLabel = 'LOCKED';
                let blinkClass = '';

                if (isCompleted) {
                    classes += ' completed-item';
                    statusLabel = 'COMPLETED ✓';
                } else if (!nextFound) {
                    blinkClass = 'blink-next';
                    statusLabel = 'IN PROGRESS ⚡';
                    nextFound = true;
                }

                const youtubeLink = `https://www.youtube.com/results?search_query=${encodeURIComponent(topic)}+tutorial`;

                return `
                    <div class="${classes} ${blinkClass}" style="padding: 20px; margin-bottom: 15px; border-left: 4px solid var(--primary-blue);">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4 class="orbitron" style="font-size: 0.8rem; margin-bottom: 5px;">${topic}</h4>
                                <p style="font-size: 0.7rem; color: var(--text-muted);">${statusLabel}</p>
                            </div>
                            <a href="${youtubeLink}" target="_blank" onclick="markComplete('${domainId}', ${stageId}, ${outcomeId})" class="btn btn-ghost" style="padding: 5px 12px; font-size: 0.6rem;">WATCH VIDEO →</a>
                        </div>
                    </div>
                `;
            }).join('');

            let assessmentColor = 'var(--light-blue)';
            let assessmentLabel = 'STAGE ASSESSMENT';
            let assessmentScoreText = '';
            let showQuizBtn = true;

            if (isAssessmentDone) {
                assessmentColor = 'rgba(54, 179, 126, 0.1)';
                assessmentLabel = 'MASTERY VALIDATED ✓';
                assessmentScoreText = `Score: ${score}%`;
                showQuizBtn = score < 100; // Allow re-take if not perfect
            }

            const assessmentHTML = stage.assessment ? `
                <div class="card" style="margin-top: 20px; background: ${assessmentColor}; padding: 20px; border: 1px dashed var(--primary-blue);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                        <div>
                            <p class="orbitron" style="font-size: 0.65rem; color: var(--primary-blue);">${assessmentLabel}</p>
                            <h3 style="font-size: 1rem; margin-top: 5px;">${stage.title} Quiz</h3>
                        </div>
                        <span class="orbitron" style="font-size: 0.8rem; color: var(--success-green);">${assessmentScoreText}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <p style="font-size: 0.8rem; color: var(--text-muted);">Test your knowledge of ${stage.topics[0]} and more.</p>
                        ${showQuizBtn ? `<button onclick="startStageQuiz('${domainId}', ${stageId})" class="btn btn-primary" style="padding: 8px 18px; font-size: 0.7rem;">${score > 0 ? 'RE-ATTEMPT' : 'START QUIZ'}</button>` : ''}
                    </div>
                </div>
            ` : '';

            return `
                <div class="stage-wrapper fade-in" style="margin-bottom: 80px;">
                    <h2 class="orbitron" style="font-size: 1.2rem; margin-bottom: 10px; color: var(--navy-blue); border-bottom: 2px solid var(--light-blue); padding-bottom: 10px;">${stage.title}</h2>
                    ${summaryHTML}
                    <div style="margin-bottom: 25px;">${linksHTML}</div>
                    <div class="topics-grid">
                        ${topicsHTML}
                    </div>
                    ${assessmentHTML}
                </div>
            `;
        }).join('');
    } catch (err) {
        console.error("Failed to load mission data:", err);
    }

    updateProgressBar(progress);
}

function startStageQuiz(domainId, stageId) {
    const stage = MISSION_TEMPLATES[domainId][stageId - 1];
    if (!stage || !stage.assessment) return;

    currentQuiz = {
        domainId,
        stageId,
        questions: stage.assessment.questions,
        currentIndex: 0,
        answers: new Array(stage.assessment.questions.length).fill(null), // Track user answers
        score: 0
    };

    document.getElementById('quiz-overlay').classList.add('active');
    document.getElementById('quiz-modal').classList.add('active');
    renderQuizStep();
}

function renderQuizStep() {
    const container = document.getElementById('quiz-question-container');
    const progressBar = document.getElementById('quiz-progress-fill');

    if (!currentQuiz) return;

    if (currentQuiz.currentIndex >= currentQuiz.questions.length) {
        finishQuiz();
        return;
    }

    const question = currentQuiz.questions[currentQuiz.currentIndex];
    const progressText = `Question ${currentQuiz.currentIndex + 1} of ${currentQuiz.questions.length}`;
    const percent = ((currentQuiz.currentIndex + 1) / currentQuiz.questions.length) * 100;

    progressBar.style.width = `${percent}%`;

    container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <p class="orbitron" style="font-size: 0.7rem; color: var(--text-muted);">${progressText}</p>
            ${currentQuiz.currentIndex > 0 ? `<button onclick="prevQuizStep()" class="btn btn-ghost" style="padding: 4px 10px; font-size: 0.6rem;">← BACK</button>` : '<span></span>'}
        </div>
        <h2 class="orbitron" style="font-size: 1.1rem; margin-bottom: 30px; line-height: 1.4;">${question.q}</h2>
        <div class="options-container">
            ${question.options.map((opt, idx) => {
        let extraClass = '';
        if (currentQuiz.answers[currentQuiz.currentIndex] !== null) {
            if (idx === question.a) extraClass = 'correct';
            else if (idx === currentQuiz.answers[currentQuiz.currentIndex]) extraClass = 'wrong';
        }
        return `<button class="quiz-option ${extraClass}" onclick="handleQuizAnswer(${idx})">${escapeHTML(opt)}</button>`;
    }).join('')}
        </div>
    `;

    // If already answered, disable options
    if (currentQuiz.answers[currentQuiz.currentIndex] !== null) {
        document.querySelectorAll('.quiz-option').forEach(opt => opt.style.pointerEvents = 'none');
        // Add a "NEXT" button if not the last question
        container.innerHTML += `<button onclick="nextQuizStep()" class="btn btn-primary" style="width: 100%; margin-top: 20px; justify-content: center;">${currentQuiz.currentIndex === currentQuiz.questions.length - 1 ? 'FINISH' : 'NEXT →'}</button>`;
    }
}

function prevQuizStep() {
    if (currentQuiz && currentQuiz.currentIndex > 0) {
        currentQuiz.currentIndex--;
        renderQuizStep();
    }
}

function nextQuizStep() {
    if (currentQuiz) {
        currentQuiz.currentIndex++;
        renderQuizStep();
    }
}

async function handleQuizAnswer(selectedIndex) {
    if (currentQuiz.answers[currentQuiz.currentIndex] !== null) return;

    const question = currentQuiz.questions[currentQuiz.currentIndex];
    currentQuiz.answers[currentQuiz.currentIndex] = selectedIndex;

    renderQuizStep(); // Re-render to show correct/wrong and Next button
}

async function finishQuiz() {
    const container = document.getElementById('quiz-question-container');

    // Calculate final score
    let correctCount = 0;
    currentQuiz.questions.forEach((q, idx) => {
        if (currentQuiz.answers[idx] === q.a) correctCount++;
    });

    const finalScore = Math.round((correctCount / currentQuiz.questions.length) * 100);

    container.innerHTML = `
        <div class="quiz-result-card fade-in">
            <div class="quiz-score-circle">${finalScore}%</div>
            <h2 class="orbitron" style="font-size: 1.2rem; margin-bottom: 15px;">${finalScore >= 70 ? 'MASTERY ACHIEVED' : 'ATTEMPT FAILED'}</h2>
            <p style="margin-bottom: 30px; color: var(--text-muted);">${finalScore >= 70 ? 'Neural signal stabilized. Your progress has been logged.' : 'Re-analyze the resources and try again.'}</p>
            <div style="display: flex; gap: 15px;">
                <button onclick="closeQuiz()" class="btn btn-ghost" style="flex: 1; justify-content: center;">CLOSE</button>
                ${finalScore < 70 ? `<button onclick="startStageQuiz('${currentQuiz.domainId}', ${currentQuiz.stageId})" class="btn btn-primary" style="flex: 1; justify-content: center;">RETRY</button>` : ''}
            </div>
        </div>
    `;

    if (finalScore >= 70) {
        await fetch(`${API_BASE}/api/missions/update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                domain_id: currentQuiz.domainId,
                stage_id: currentQuiz.stageId,
                type: 'assessment',
                status: 'completed',
                score: finalScore
            })
        });
        loadProgress();
    }
}

function closeQuiz() {
    document.getElementById('quiz-overlay').classList.remove('active');
    document.getElementById('quiz-modal').classList.remove('active');
    currentQuiz = null;
}

async function markComplete(domainId, stageId, outcomeId) {
    await fetch(`${API_BASE}/api/progress/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            domain_id: domainId,
            stage_id: stageId,
            outcome_id: outcomeId,
            status: true
        })
    });

    // Also track as activity in missions table for dashboard stats
    await fetch(`${API_BASE}/api/missions/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            domain_id: domainId,
            stage_id: stageId,
            type: 'activity',
            status: 'completed'
        })
    });

    loadProgress();
}

function updateProgressBar(progress) {
    const bar = document.getElementById('fuel-bar');
    const statusText = document.getElementById('progress-status');
    if (!bar) return;

    const completed = progress.filter(p => p.status).length;
    const domainId = localStorage.getItem('current_domain');
    const stages = MISSION_TEMPLATES[domainId] || [];
    const totalTopics = stages.reduce((acc, stage) => acc + stage.topics.length, 0) || 1;

    const percent = Math.min((completed / totalTopics) * 100, 100);
    bar.style.width = `${percent}%`;
    if (statusText) statusText.innerText = `DEPLOYMENT PROGRESS: ${Math.round(percent)}%`;

    if (percent >= 100) {
        issueCertificate(domainId);
    }
}

function issueCertificate(domainId) {
    let certificates = JSON.parse(localStorage.getItem('falcon_certificates') || '[]');
    if (!certificates.includes(domainId)) {
        certificates.push(domainId);
        localStorage.setItem('falcon_certificates', JSON.stringify(certificates));
        console.log(`Certificate issued for ${domainId}`);
        // Visual cue for certification
        if (window.location.pathname.includes('roadmap.html')) {
            const container = document.getElementById('mission-container');
            if (container && !document.getElementById('cert-alert')) {
                const alertDiv = document.createElement('div');
                alertDiv.id = 'cert-alert';
                alertDiv.className = 'card fade-in';
                alertDiv.style.background = 'var(--navy-blue)';
                alertDiv.style.color = 'white';
                alertDiv.style.textAlign = 'center';
                alertDiv.style.marginBottom = '40px';
                alertDiv.innerHTML = `
                    <h2 class="orbitron" style="color: white; font-size: 1.2rem; margin-bottom: 10px;">MISSION COMPLETE: ${DOMAINS[domainId].name.toUpperCase()}</h2>
                    <p style="font-size: 0.9rem; margin-bottom: 20px;">Your domain certification is now available in your Profile.</p>
                    <button onclick="window.location.href='profile.html'" class="btn" style="background: white; color: var(--navy-blue);">VIEW CERTIFICATE →</button>
                `;
                container.prepend(alertDiv);
            }
        }
    }
}

/* 4. Profile & Achievement System */
function renderProfile() {
    const xpElement = document.getElementById('profile-xp');
    const certGrid = document.getElementById('certification-grid');
    const noCertsMsg = document.getElementById('no-certs-msg');

    if (!xpElement || !certGrid) return;

    const certificates = JSON.parse(localStorage.getItem('falcon_certificates') || '[]');

    // XP Calculation from API + local certs
    fetch(`${API_BASE}/api/dashboard/stats`)
        .then(res => res.json())
        .then(stats => {
            const totalXP = (stats.completed_outcomes || 0) * 10 + (stats.assessments_done || 0) * 100 + (certificates.length * 500);
            xpElement.innerText = totalXP;
        });

    if (certificates.length > 0) {
        if (noCertsMsg) noCertsMsg.style.display = 'none';
        certGrid.innerHTML = certificates.map(id => {
            const domain = DOMAINS[id];
            return `
                <div class="card fade-in" style="padding: 30px; text-align: center; border: 2px solid var(--primary-blue); background: white;">
                    <div style="font-size: 3.5rem; margin-bottom: 20px;">🎖️</div>
                    <h3 class="orbitron" style="font-size: 1rem; margin-bottom: 10px;">${domain.name.toUpperCase()}</h3>
                    <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 20px;">MASTER ARCHITECT VALIDATION</p>
                    <div style="background: var(--light-blue); color: var(--primary-blue); padding: 8px; border-radius: 4px; font-family: 'Orbitron'; font-size: 0.65rem; font-weight: bold;">FALCON-CERTIFIED</div>
                    <button class="btn btn-ghost" style="margin-top: 25px; font-size: 0.65rem; width: 100%; justify-content: center;" onclick="alert('Syncing Credential Hash...')">DOWNLOAD BADGE</button>
                </div>
            `;
        }).join('');
    }
}

/* 5. Resource Library */
function renderResources() {
    const domainId = localStorage.getItem('current_domain');
    const label = document.getElementById('resource-domain-label');
    const container = document.getElementById('udemy-resource-list');

    if (!domainId || !label || !container) return;

    const domainName = DOMAINS[domainId]?.name || 'Unknown Path';
    label.innerText = domainName.toUpperCase();

    const resources = [
        { name: `${domainName} Mastery`, provider: 'Edureka', url: `https://www.edureka.co/search/${encodeURIComponent(domainName)}`, icon: '💎' },
        { name: `${domainName} Bootcamp`, provider: 'Udemy', url: `https://www.udemy.com/courses/search/?q=${encodeURIComponent(domainName)}`, icon: '🎓' },
        { name: `${domainName} Essential Skills`, provider: 'YouTube', url: `https://www.youtube.com/results?search_query=${encodeURIComponent(domainName)}+tutorial`, icon: '📺' },
        { name: `Advanced ${domainName} Guide`, provider: 'Medium', url: `https://medium.com/search?q=${encodeURIComponent(domainName)}`, icon: '📝' }
    ];

    container.innerHTML = resources.map(res => `
        <div class="card lib-card scroll-reveal" style="padding: 25px; border-left: 4px solid var(--primary-blue);">
            <div style="font-size: 1.5rem; margin-bottom: 15px;">${res.icon}</div>
            <h4 class="orbitron" style="font-size: 0.85rem; margin-bottom: 5px;">${res.name}</h4>
            <p style="font-size: 0.7rem; color: var(--text-muted); font-weight: bold; margin-bottom: 20px;">PROVIDER: ${res.provider}</p>
            <a href="${res.url}" target="_blank" class="btn btn-primary" style="padding: 10px 15px; font-size: 0.65rem; width: 100%; justify-content: center;">START MISSION →</a>
        </div>
    `).join('');
}

/* 6. AI Chatbot Guide Logic */
function initChatbot() {
    const trigger = document.getElementById('ai-guide-trigger');
    const panel = document.getElementById('chat-panel');
    const closeBtn = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-chat');
    const input = document.getElementById('chat-user-input');

    if (!trigger || !panel) return;

    trigger.onclick = () => panel.classList.toggle('active');
    closeBtn.onclick = () => panel.classList.remove('active');

    if (sendBtn) {
        sendBtn.onclick = () => handleChatSubmit();
        input.onkeypress = (e) => {
            if (e.key === 'Enter') handleChatSubmit();
        };
    }
}

async function handleChatSubmit() {
    const input = document.getElementById('chat-user-input');
    const content = document.getElementById('chat-content');
    const text = input.value.trim();

    if (!text) return;

    appendBubble(content, text, 'user');
    input.value = '';

    const loadingId = 'ai-loading-' + Date.now();
    appendBubble(content, 'Connecting to FALCON Brain (ChatGPT)...', 'ai', loadingId);

    try {
        const res = await fetch(`${API_BASE}/api/ai/guide`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });
        const data = await res.json();

        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.innerHTML = data.response;

        if (data.suggestion && DOMAINS[data.suggestion]) {
            const domain = DOMAINS[data.suggestion];
            appendBubble(content, `FALCON Recommendation: **${domain.name}**. <br><button onclick="selectDomain('${data.suggestion}')" class="btn btn-primary" style="margin-top:10px; padding: 5px 12px; font-size: 0.7rem;">LAUNCH MISSION</button>`, 'ai');
        }
    } catch (err) {
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.innerText = "The neural link is unstable. I recommend starting with the Web Developer or AI Engineer tracks for high-impact results.";
    }
}

function appendBubble(container, text, type, id = '') {
    const div = document.createElement('div');
    div.className = `chat-bubble bubble-${type}`;
    if (id) div.id = id;
    div.innerHTML = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

/* 7. Authentication */
function handleAuth() {
    const loginForm = document.getElementById('login-form');
    const token = localStorage.getItem('architect_token');
    if (!token && !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
    }

    if (loginForm) {
        loginForm.onsubmit = async (e) => {
            e.preventDefault();
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;

            try {
                submitBtn.disabled = true;
                submitBtn.innerText = 'AUTHORIZING...';

                const res = await fetch(`${API_BASE}/api/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: e.target.username.value,
                        password: e.target.password.value
                    })
                });

                if (!res.ok) {
                    const errorData = await res.json().catch(() => ({}));
                    throw new Error(errorData.message || `HTTP Error: ${res.status}`);
                }

                const data = await res.json();
                console.log('Login Response Data:', data);

                if (data.success) {
                    console.log('Login Success - Setting Token');
                    localStorage.setItem('architect_token', 'AUTHORIZED');
                    alert('ACCESS GRANTED: WELCOME COMMANDER');
                    window.location.href = 'index.html';
                } else {
                    console.warn('Login Failed - Message:', data.message);
                    throw new Error(data.message || 'Authentication failed');
                }
            } catch (err) {
                console.error('Login Error:', err);
                alert(`FALCON ACCESS DENIED: ${err.message.toUpperCase()}`);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
            }
        };
    }
}
