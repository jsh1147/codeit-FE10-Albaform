import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { NAMES, OPTIONS } from '@/constants/cookies';

export const GET = async () => {
  const cookieStore = await cookies();
  const resBody = Object.entries(NAMES).reduce(
    (acc, [varName, cooName]) => {
      acc[varName] = cookieStore.get(cooName)?.value || null;
      return acc;
    },
    {} as Record<string, string | null>,
  );

  return NextResponse.json(resBody, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  const cookieStore = await cookies();
  const reqBody: Record<string, string> = await request.json();
  Object.entries(NAMES).forEach(([varName, cooName]) => {
    cookieStore.set(cooName, reqBody[varName], OPTIONS);
  });

  return NextResponse.json({ message: 'Cookies added' }, { status: 200 });
};

export const PATCH = async (request: NextRequest) => {
  const cookieStore = await cookies();
  const reqBody: Record<string, string> = await request.json();
  Object.entries(reqBody).forEach(([varName, value]) => {
    cookieStore.set(NAMES[varName as keyof typeof NAMES], value, OPTIONS);
  });

  return NextResponse.json({ message: 'Cookies modified' }, { status: 200 });
};

export const DELETE = async () => {
  const cookieStore = await cookies();
  Object.values(NAMES).forEach((cooName) => {
    cookieStore.delete(cooName);
  });

  return NextResponse.json({ message: 'Cookies deleted' }, { status: 200 });
};
