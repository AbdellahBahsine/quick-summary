import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authenticate } from '@/app/middleware/authMiddleware';

export async function GET(request: Request) {
    const user = authenticate(request);
    if (user instanceof NextResponse) return user;

    try {
        const summaries = await prisma.summary.findMany({
            where: { userId: user.id },
        });
        return NextResponse.json(summaries);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching your summaries' }, { status: 500 });
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
    } catch (error) {
      return NextResponse.json({ error: 'Error creating summary' }, { status: 500 });
    }
  }
  
  
  