import './App.css';
import ChatApp from './page';
import Login from './login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/page" element={<ChatApp />} />
      </Routes>
    </Router>
  );
}

export default App;
