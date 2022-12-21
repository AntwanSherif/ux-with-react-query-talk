import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@helpers/api/queryClient';
import '@styles/globals.css';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

