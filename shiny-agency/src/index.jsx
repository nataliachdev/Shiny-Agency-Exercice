import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import GlobalStyle from './utils/style/GlobalStyle';
import { ThemeProvider, SurveyProvider } from './utils/context';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <ThemeProvider>
      <SurveyProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </SurveyProvider>
    </ThemeProvider>
  </Router>,
);
