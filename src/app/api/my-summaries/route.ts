import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authenticate } from '@/app/middleware/authMiddleware';

export async function GET(request: Request) {
  const user = authenticate(request);
  if (user instanceof NextResponse) return user;

  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '8';

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const validPageNumber = Math.max(1, pageNumber);
    const validLimitNumber = Math.max(1, limitNumber);

    const total = await prisma.summary.count({
      where: { userId: user.userId },
    });

    const summaries = await prisma.summary.findMany({
      where: { userId: user.userId },
      skip: (validPageNumber - 1) * validLimitNumber,
      take: validLimitNumber,
    });

    return NextResponse.json({ summaries, total });
  } catch {
    return NextResponse.json({ error: 'Error fetching summaries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
    const user = authenticate(request);
    if (user instanceof NextResponse) return user;
  
    const { title, author, description, content } = await request.json();
  
    const userId = user.userId;
  
    try {
      const newSummary = await prisma.summary.create({
        data: {
          title,
          author,
          description,
          content,
          userId,
        },
      });
      return NextResponse.json(newSummary, { status: 201 });
    } catch {
      return NextResponse.json({ error: 'Error creating summary' }, { status: 500 });
    }
  }
  
  
  