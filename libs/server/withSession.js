import { withIronSessionApiRoute } from 'iron-session/next'

const cookieOptions = {
  cookieName: 'movsession',
  password: process.env.COOKIE_PASSWORD,
}

export function withApiSession(fn) {
  return withIronSessionApiRoute(fn, cookieOptions)
}
