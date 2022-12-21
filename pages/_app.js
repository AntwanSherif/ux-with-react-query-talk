import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@styles/globals.css';

const queryClient = new QueryClient({
  refetchOnWindowFocus: false
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

