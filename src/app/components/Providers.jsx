"use client"
import { SessionProvider } from 'next-auth/react';
import { getSession } from '../lib/auth';

export default async function Providers({ children }) {
  const session = await getSession();

  return (
    <SessionProvider session={session}>

        {children}
  
    </SessionProvider>
  );
}
