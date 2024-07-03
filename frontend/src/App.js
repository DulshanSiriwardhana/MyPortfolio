import './App.css';
import Navbar from './components/navbar/navbar';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
