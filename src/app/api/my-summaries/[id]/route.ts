import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authenticate } from '@/app/middleware/authMiddleware';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const user = authenticate(request);
    if (user instanceof NextResponse) return user;

    const { id } = params;
  
    const summaryId = parseInt(id, 10);
  
    if (isNaN(summaryId)) {
      return NextResponse.json({ error: 'Invalid id provided' }, { status: 400 });
    }
  
    try {
      await prisma.summary.delete({
        where: { id: summaryId },
      });
      return NextResponse.json({ message: 'Summary deleted' });
    } catch {
      return NextResponse.json({ error: 'Error deleting summary' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const user = authenticate(request);
  if (user instanceof NextResponse) return user;

  const { id } = params;
  
  const summaryId = parseInt(id, 10);

  if (isNaN(summaryId)) {
    return NextResponse.json({ error: 'Invalid id provided' }, { status: 400 });
  }

  const { title, content, author, description } = await request.json();

  try {
    const updatedSummary = await prisma.summary.update({
      where: { id: summaryId },
      data: { title, content, author, description },
    });
    return NextResponse.json(updatedSummary);
  } catch {
    return NextResponse.json({ error: 'Error updating summary' }, { status: 500 });
  }
}