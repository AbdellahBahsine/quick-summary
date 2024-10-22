import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authenticate } from '@/app/middleware/authMiddleware';

type SummaryFilters = {
  title?: {
    contains: string;
    mode: 'insensitive';
  };
};

export async function GET(request: Request) {
  const user = authenticate(request);
  if (user instanceof NextResponse) return user;

  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '8';
    const title = searchParams.get('title') || '';

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const filters: SummaryFilters = {};
    if (title) {
      filters.title = {
        contains: title,
        mode: 'insensitive',
      };
    }

    const total = await prisma.summary.count({
      where: filters,
    });

    const summaries = await prisma.summary.findMany({
      where: filters,
      skip: (pageNumber - 1) * limitNumber,
      take: limitNumber,
    });

    return NextResponse.json({ summaries, total });
  } catch (error) {
    console.error('Error fetching summaries:', error);
    return NextResponse.json({ error: 'Error fetching summaries' }, { status: 500 });
  }
}