import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authenticate } from '@/app/middleware/authMiddleware';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const user = authenticate(request);
  if (user instanceof NextResponse) return user;

  const { id } = params;

  const summaryId = parseInt(id, 10);

  if (isNaN(summaryId)) {
    return NextResponse.json({ error: 'Invalid id provided' }, { status: 400 });
  }

  try {
    const summary = await prisma.summary.findUnique({
      where: { id: summaryId },
    });

    if (!summary) {
      return NextResponse.json({ error: 'Summary not found' }, { status: 404 });
    }

    return NextResponse.json(summary);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching summary' }, { status: 500 });
  }
  }