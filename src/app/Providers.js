'use client';

// import { ThemeProvider } from 'acme-theme';
// import { AuthProvider } from 'acme-auth';
import { GlobalProvider } from "../Context/GlobalContext";

export function Providers({ children }) {
  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  );
}