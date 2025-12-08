import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Customer Pages
import IKampusDashboard from './pages/iKampusDashboard';
import Communities from './pages/Communities';
import Assistant from './pages/Assistant';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

function App() {
  return (
    
          <Router>
            <Routes>
              {/* Customer Routes */}
              <Route path="/" element={<IKampusDashboard />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/assistant" element={<Assistant />} />
              <Route path="/profellow" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />

            </Routes>
      
          </Router>

  );
}

export default App;
