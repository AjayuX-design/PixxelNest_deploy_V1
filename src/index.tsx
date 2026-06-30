import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve all static assets from /public
app.use('/*', serveStatic({ root: './' }))

export default app
