import Navbar from './components/Navbar';
import Customers from './components/Customers';
import Trainings from './components/Trainings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">

      <Routes>
        <Route exact path="/" element={<Customers/>} />
        <Route exact path="/trainings" element={<Trainings/>} />
      </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
