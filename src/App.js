import { BrowserRouter, Route, Routes } from "react-router-dom";

import FilterPage from "./components/FilterPage";
import InputPage from "./components/InputPage";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
