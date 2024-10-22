import { NextResponse } from 'next/server';
import cookie from 'cookie';

export async function POST() {
  const res = NextResponse.json({ message: 'Logged out' });

  res.headers.append('Set-Cookie', cookie.serialize('refreshToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0),
    path: '/',
    sameSite: 'strict',
  }));

  return res;
}
