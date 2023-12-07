import NextAuth from 'next-auth';
//import { authConfig } from '@/app/auth.config';
 
export default function() {
    
};
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};