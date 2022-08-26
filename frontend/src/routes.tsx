import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { UnsignedIn } from './pages/UnsignedIn';
import { Home } from './pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<UnsignedIn page="signin" />} />
        <Route path="/signup" element={<UnsignedIn page="signup" />} />
        <Route path="/forgotpassword" element={<UnsignedIn page="forgotpassword" />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>Not found!</h1>} />
        <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
};
