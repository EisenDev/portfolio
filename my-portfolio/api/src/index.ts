import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { eq } from 'drizzle-orm';
import { scans, systems } from './db/schema';

export type Bindings = {
    DATABASE_URL: string;
    DATABASE_AUTH_TOKEN: string;
};

type Variables = {
    db: any;
};

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();

// Global CORS Middleware
app.use(
    '/api/*',
    cors({
        origin: (origin) => {
            // Allow requests with no origin (like mobile apps or curl requests)
            if (!origin) return '*';

            // Allow production domain and its subdomains
            if (origin === 'https://arjayescabas.me' || origin.endsWith('.arjayescabas.me')) {
                return origin;
            }

            // Fallback for development (optional but good for local testing)
            if (origin.startsWith('http://localhost:')) {
                return origin;
            }

            // Reject others
            return null;
        },
        allowHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header', 'Upgrade-Insecure-Requests'],
        allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE'],
        exposeHeaders: ['Content-Length'],
        maxAge: 600,
        credentials: true,
    })
);

// Middleware to inject Drizzle ORM instance
app.use('*', async (c, next) => {
    const client = createClient({
        url: c.env.DATABASE_URL,
        authToken: c.env.DATABASE_AUTH_TOKEN,
    });
    c.set('db', drizzle(client));
    await next();
});

// Endpoint: Start a Scan
app.post('/api/scan', async (c) => {
    const { target } = await c.req.json();
    const db = c.get('db') as any; // Type assertions for brevity

    const newScan = {
        id: crypto.randomUUID(),
        target,
        status: 'scanning',
        startedAt: new Date()
    };

    await db.insert(scans).values(newScan);
    return c.json({ message: 'Scan initiated', scan: newScan }, 202);
});

// Endpoint: Global System Status
app.get('/api/status', async (c) => {
    const db = c.get('db') as any;
    const sysPing = await db.select().from(systems);

    return c.json({
        global_status: 'operational',
        nodes: sysPing
    });
});

export default app;
