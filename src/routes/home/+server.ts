import * as fs from 'fs'
import type { RequestHandler } from './$types'


export const GET = (async () => {
    const path = './static/gros.css.zip'
    const file = fs.readFileSync(path)
    return new Response(file, {
        headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": "attachement; filename=gros.css.zip",
        }
    })
}) satisfies RequestHandler