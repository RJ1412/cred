import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Paragraph } from './pages/Paragraph';
import { Iphone } from './pages/Iphone';
import { FloatingCards } from './pages/FloatingCards';
import { CreditCards } from './pages/CreditCards';
import { Balls } from './pages/Balls';
import { Torch } from './pages/Torch';
import { Ratings } from './pages/Ratings';
import { CredFooter } from './pages/CredFooter';
import { Light } from './pages/Light';
import { FAQ } from './pages/FAQ';
import { UPI } from './pages/UPI';
import { CredPay } from './pages/CredPay';

export default function App() {
  return (
    <Routes>
      {/* Home Page Route */}
      <Route
        path="/"
        element={
          <>
            <div className="bg-black w-screen">
              <Landing />
              <Paragraph />
              <Iphone />
              <FloatingCards />
              <CreditCards />
              <Balls />
              <Torch />
              <Ratings />
              <Light />
              <FAQ />
              <CredFooter />
            </div>
          </>
        }
      />

      {/* UPI Page Route */}
      <Route path="/upi-credit" element={<UPI />} />
      <Route path="/cred-pay" element={<CredPay />} />
    </Routes>
  );
}
