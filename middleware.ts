import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  return NextResponse.redirect(
    new URL('https://four.meme?code=C5UE2M5H89FC')
  )
}

export const config = {
  matcher: '/:path*',
}
