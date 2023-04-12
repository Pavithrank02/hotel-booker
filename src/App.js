
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CustomerLogin from './components/Login/CustomerLogin';
import AdminLogin from './components/Login/AdminLogin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/customer" element={<CustomerLogin />} />
      </Routes>

    </div>
  );
}

export default App;
