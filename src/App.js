import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element = {<LandingPage/>}/>
            <Route path="/search" element = {<SearchPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
