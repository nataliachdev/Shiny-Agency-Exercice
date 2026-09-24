import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
// On ajoute nos composants
import ClientForm from './components/ClientForm';
import FreelanceForm from './components/FreelanceForm';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survey" element={<Survey />}>
        {/* Nous imbriquons nos composants dans survey */}
        <Route path="client" element={<ClientForm />} />
        <Route path="freelance" element={<FreelanceForm />} />
      </Route>
    </Routes>
  </Router>,
);
