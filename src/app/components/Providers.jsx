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
        const shouldValidate = window.location.pathname !== '/';
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
