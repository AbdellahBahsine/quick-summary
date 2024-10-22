import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';

const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'strong-refresh-secret';
const JWT_SECRET = process.env.JWT_SECRET || 'strong-access-secret';

interface DecodedToken {
  userId: string;
}

export async function POST(req: Request) {
  const cookies = cookie.parse(req.headers.get('cookie') || '');
  const refreshToken = cookies.refreshToken;

  if (!refreshToken) {
    return NextResponse.json({ message: 'No refresh token provided' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) as DecodedToken;

    const newAccessToken = jwt.sign({ userId: decoded.userId }, JWT_SECRET, { expiresIn: '15m' });

    return NextResponse.json({ accessToken: newAccessToken });
  } catch {
    return NextResponse.json({ message: 'Invalid or expired refresh token' }, { status: 403 });
  }
}
