import { serve } from 'bun';
import { set } from './db';
import index from './index.html';

const server = serve({
  routes: {
    '/*': index,
    '/api/data/:key': {
      POST(req) {
        const { key } = req.params;
        const value = Date.now().toString();
        const result = set(key, value);
        return Response.json(result);
      },
    },
  },
  development: process.env.NODE_ENV !== 'production',
});

console.log(`🚀 Server running at ${server.url}`);
