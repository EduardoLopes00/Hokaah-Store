import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { UnsignedIn } from './pages/UnsignedIn';
import { Home } from './pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnsignedIn page="signin" />} path="/signin" />
        <Route element={<UnsignedIn page="signup" />} path="/signup" />
        <Route element={<UnsignedIn page="forgotpassword" />} path="/forgotpassword" />
        <Route element={<Home />} path="/home" />
      </Routes>
    </BrowserRouter>
  );
};
