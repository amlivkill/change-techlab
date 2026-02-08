import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Check if we're in test/mock mode
const isTestMode = !process.env.SUPABASE_URL ||
    process.env.SUPABASE_URL === 'https://your-project.supabase.co' ||
    process.env.TEST_MODE === 'true';

// In-memory storage for test mode
const testSubmissions = [];

// Supabase client (only if real credentials provided)
let supabase = null;
if (!isTestMode) {
    supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
    );
}

console.log(`Running in ${isTestMode ? 'TEST MODE (in-memory storage)' : 'PRODUCTION MODE (Supabase)'}`);

// CORS configuration
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:4173',
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        mode: isTestMode ? 'test' : 'production',
        timestamp: new Date().toISOString()
    });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { organization, email, system, context } = req.body;

        // Validation
        if (!organization || !email || !system) {
            return res.status(400).json({
                error: 'Missing required fields: organization, email, system'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const submission = {
            id: crypto.randomUUID(),
            organization_name: organization,
            email: email,
            system_of_interest: system,
            additional_context: context || null,
            submitted_at: new Date().toISOString()
        };

        // Use test mode or Supabase
        if (isTestMode) {
            testSubmissions.push(submission);
            console.log('TEST MODE - Submission saved:', submission);
            console.log(`Total test submissions: ${testSubmissions.length}`);

            res.status(201).json({
                message: 'Submission received successfully (TEST MODE)',
                id: submission.id
            });
        } else {
            // Insert into Supabase
            const { data, error } = await supabase
                .from('contact_submissions')
                .insert([submission])
                .select();

            if (error) {
                console.error('Supabase error:', error);
                return res.status(500).json({ error: 'Failed to save submission' });
            }

            res.status(201).json({
                message: 'Submission received successfully',
                id: data[0].id
            });
        }

    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Test endpoint to view submissions (only in test mode)
app.get('/api/submissions', (req, res) => {
    if (!isTestMode) {
        return res.status(403).json({ error: 'Only available in test mode' });
    }
    res.json({ submissions: testSubmissions, count: testSubmissions.length });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
