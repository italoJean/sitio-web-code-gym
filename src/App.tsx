import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Team from './pages/Team';
import Arsenal from './pages/Arsenal';
import Lounge from './pages/Lounge';
import ProteinBar from './pages/ProteinBar';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          <Route path="/arsenal" element={<Arsenal />} />
          <Route path="/lounge" element={<Lounge />} />
          <Route path="/protein-bar" element={<ProteinBar />} />
        </Routes>
      </Layout>
    </Router>
  );
}
