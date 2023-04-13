
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CustomerLogin from './components/Login/CustomerLogin';
import AdminLogin from './components/Login/AdminLogin';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/customer" element={<CustomerLogin />} />
        <Route path="/register" element={<Registration />} />
      </Routes>

    </div>
  );
}

export default App;
