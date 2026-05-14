// =============================================================
// VIJAYA v2 — App shell with router
// =============================================================
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConditionResult from './pages/ConditionResult';
import Timeline from './pages/Timeline';
import Research from './pages/Research';
import Directory from './pages/Directory';
import Petition from './pages/Petition';
import Dashboard from './pages/Dashboard';
import Archetype from './pages/Archetype';
import NDPS from './pages/NDPS';
import HempCommission from './pages/HempCommission';
import Atlas from './pages/Atlas';
import Citations from './pages/Citations';
import Practitioners from './pages/Practitioners';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/condition/:id" element={<ConditionResult />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/research" element={<Research />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/petition" element={<Petition />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/archetype" element={<Archetype />} />
        <Route path="/ndps" element={<NDPS />} />
        <Route path="/hemp-commission" element={<HempCommission />} />
        <Route path="/atlas" element={<Atlas />} />
        <Route path="/citations" element={<Citations />} />
        <Route path="/practitioners" element={<Practitioners />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
