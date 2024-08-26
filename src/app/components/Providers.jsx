"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { getSession } from '../lib/auth';

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        // We only validate the token if we are not on '/' or sign-in or register pages
        const pathname = window.location.pathname;
        const shouldValidate = pathname !== '/' && pathname !== '/signin' && pathname !== '/register';

        const session = await getSession(shouldValidate);
        setSession(session);
      } catch (error) {
        console.error('Failed to fetch session:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  return (
    <SessionContext.Provider value={{ data: session }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};
