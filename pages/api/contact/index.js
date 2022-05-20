import withHandler from '@/libs/server/withHandler'
import client from '@/libs/server/client'

async function handler(req, res) {
  const {
    body: { name, email, description, url },
  } = req
  if (req.method === 'POST') {
    const request = await client.request.create({
      data: {
        name,
        email,
        description,
        url,
      },
    })
    res.json({
      ok: true,
      request,
    })
  }
}

export default withHandler({ methods: ['POST'], fn: handler, isPrivate: false })
