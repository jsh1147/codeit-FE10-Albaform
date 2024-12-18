import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  weight: '400 700',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '알바폼',
  description: '한 곳에서 관리하는 알바 구인 플랫폼',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
