import './App.scss';
import { Router } from 'src/routes';
import { AuthContextProvider } from './contexts/Auth';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
