import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'your-access-secret';

export async function GET(req: Request) {
  const token = req.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, username: true, email: true },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
}
