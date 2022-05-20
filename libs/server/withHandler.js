export default function withHandler({
  methods,
  fn,
  isPrivate = true,
  forAdmin = false,
}) {
  return async function (req, res) {
    if (req.method && !methods.includes(req.method)) {
      return res.status(405).end()
    }
    if (isPrivate && !req.session?.user) {
      return res.status(401).json({ ok: false, error: 'please log in' })
    }
    if (
      req.method === 'POST' &&
      forAdmin &&
      req.session?.user?.detail === false
    ) {
      return res.status(403).json({ ok: false, error: 'you are not admin' })
    }
    try {
      await fn(req, res)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error })
    }
  }
}
