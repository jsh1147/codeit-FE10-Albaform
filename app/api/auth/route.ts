import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { COOKIE_NAMES } from '@/constants/api';
import {
  getCookies,
  postCookies,
  patchCookies,
  deleteCookies,
} from '@/services/cookie';

type JSCookieName = keyof typeof COOKIE_NAMES;

export const GET = async () => {
  const resBody = await getCookies();

  return NextResponse.json(resBody, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  const reqBody: Record<JSCookieName, string> = await request.json();
  await postCookies(reqBody);

  return NextResponse.json({ message: 'Cookies added' }, { status: 200 });
};

export const PATCH = async (request: NextRequest) => {
  const reqBody: Record<JSCookieName, string> = await request.json();
  await patchCookies(reqBody);

  return NextResponse.json({ message: 'Cookies modified' }, { status: 200 });
};

export const DELETE = async () => {
  await deleteCookies();
  return NextResponse.json({ message: 'Cookies deleted' }, { status: 200 });
};
