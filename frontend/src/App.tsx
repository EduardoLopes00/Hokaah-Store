import './App.scss';
import { Router } from 'src/routes';
import { AuthContextProvider } from './contexts/Auth';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </div>
  );
}

export default App;
