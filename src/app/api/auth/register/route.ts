import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
    const { email, username, password } = await req.json();

    if (!email || !username || !password) {
        return NextResponse.json({ message: 'Email, username, or password is missing.' }, { status: 400 });
    }

    try {
        const existingUser = await prisma.user.findFirst({
            where: { username }
        });

        if (existingUser) {
            return NextResponse.json({ message: 'User already exists.' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword
            },
        });

        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 })
    } catch {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}