import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'your-access-secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'your-refresh-secret';

export async function POST(req: Request) {
    const { username, password } = await req.json();

    if (!username || !password) {
        return NextResponse.json({ message: 'Username, or password is missing.' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({where: { username }});

    if (!user) {
        return NextResponse.json({message: "User does not exist"}, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return NextResponse.json({message: "Invalid password"}, { status: 401 });
    }

    const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ userId: user.id }, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

    const cookieOptions = cookie.serialize('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });

    const res = NextResponse.json({ accessToken }, { status: 200 });

    res.headers.append('Set-Cookie', cookieOptions);

    return res;
}