import './css/my_reset.css';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Upcoming from './components/Upcoming';
import Today from './components/Today';
import Calendar from './components/Calendar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="today" element={<Today />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>

        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
