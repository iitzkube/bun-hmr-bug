import { Database } from 'bun:sqlite';

const db = new Database('database.sqlite');

db.run(`
  CREATE TABLE IF NOT EXISTS data (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );
`);

export function set(key: string, value: string) {
  const query = db.query(`
    INSERT INTO data (key, value)
    VALUES (?, ?)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value
    RETURNING key, value
  `);
  return query.get(key, value);
}
