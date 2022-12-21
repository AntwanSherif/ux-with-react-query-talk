import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  refetchOnWindowFocus: false
  // staleTime: 5 * 60 * 1000,
  // cacheTime: 10 * 60 * 1000,
});

