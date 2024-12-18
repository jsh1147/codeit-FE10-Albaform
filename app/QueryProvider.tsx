'use client';

import { ReactNode } from 'react';
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: { staleTime: 60 * 1000 },
    },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) return makeQueryClient();
  else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
};

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const QueryClient = getQueryClient();
  return (
    <QueryClientProvider client={QueryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
