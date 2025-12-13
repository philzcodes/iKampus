import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Customer Pages
import CampusFeed from './pages/CampusFeed';
import Chat from './pages/AiChat';
import Chats from './pages/Chats';
import Projects from './pages/Projects';

function App() {
  return (
    
          <Router>
            <Routes>
              {/* Customer Routes */}
              <Route path="/" element={<Chat />} />
              <Route path="/campusFeed" element={<CampusFeed />} />
              <Route path="/chats" element={<Chats />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/communities" element={<CampusFeed />} />
              <Route path="/alumni" element={<CampusFeed />} />
            </Routes>
      
          </Router>

  );
}

export default App;
