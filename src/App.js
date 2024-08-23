import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import LoginPage from './component/LoginPage';
import UploadPage from "./component/UploadPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route path="/upload" element={<UploadPage />} /> 
      </Routes>
  </Router>
  );
}

export default App;
