import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { authenticate } from '@/app/middleware/authMiddleware';

export async function GET(request: Request) {
  const user = authenticate(request);
  if (user instanceof NextResponse) return user;

  try {
    const summaries = await prisma.summary.findMany();
    return NextResponse.json(summaries);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching summaries' }, { status: 500 });
  }
}
