import Header from './Header';
import Footer from './Footer';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ReservationPage from './pages/BookingPage/BookingPage'
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage'
import HomePage from './pages/HomePage/HomePage';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/reservations" element={<ReservationPage />}></Route>
          <Route path="/underConstruction" element={<UnderConstructionPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layout;