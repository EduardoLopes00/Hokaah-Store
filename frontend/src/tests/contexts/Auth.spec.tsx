import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from 'src/contexts/Auth';
import { useAuth } from 'src/hooks';

type TextComponentProps = {
  email: string;
  password: string;
};

afterEach(() => {
  jest.restoreAllMocks();
});

const queryClient = new QueryClient();

const TestComponent: React.FC<TextComponentProps> = ({ email, password }) => {
  const { authenticate, signInRequest, userLogged } = useContext(AuthContext);

  if (signInRequest.isError) {
    return <h1>{signInRequest.error.message + ' code:  ' + signInRequest.error.code}</h1>;
  }
  if (signInRequest.isLoading) {
    return <h1>Loading request</h1>;
  }

  return (
    <>
      {(userLogged && <h1>name: {userLogged.first_name}</h1>) || <h1>Unsigned</h1>}

      <button name="signin" onClick={() => authenticate(email, password)}>
        signin
      </button>
    </>
  );
};

jest.mock('src/hooks/useAuth');

describe('Auth context', () => {
  it('has no userLogged information when user is not logged', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthContextProvider>
            <TestComponent email="" password="" />
          </AuthContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );
    screen.debug();

    expect(screen.getByText('Unsigned')).toBeInTheDocument();
  });

  it('retrieves user information when authenticated', async () => {
    const useAuthMocked = jest.mocked(useAuth);

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthContextProvider>
            <TestComponent email="eduardo.toworkstudy@gmail.com" password="123456789" />
          </AuthContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'signin' }));

    await waitFor(() => {
      expect(screen.getByText(/(Eduardo)/i)).toBeInTheDocument();
    });

    screen.debug();
  });
});
