import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import NoMatchPage from './pages/NoMatchPage';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </>

  );
}

export default App;
