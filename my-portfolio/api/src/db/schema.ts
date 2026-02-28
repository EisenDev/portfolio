import { sqliteTable, text, integer, blob } from 'drizzle-orm/sqlite-core';

export const scans = sqliteTable('scans', {
    id: text('id').primaryKey(),
    target: text('target').notNull(),
    status: text('status', { enum: ['pending', 'scanning', 'completed', 'failed'] }).default('pending'),
    vulnerabilities: blob({ mode: 'json' }), // JSON payload of findings
    startedAt: integer('started_at', { mode: 'timestamp' }).notNull(),
    completedAt: integer('completed_at', { mode: 'timestamp' })
});

export const systems = sqliteTable('systems', {
    id: text('id').primaryKey(),
    provider: text('provider').notNull(),
    region: text('region').notNull(),
    latency_ms: integer('latency_ms').notNull(),
    lastPing: integer('last_ping', { mode: 'timestamp' }).notNull()
});
