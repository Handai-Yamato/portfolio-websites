import "./assets/styles/style.css";
import "./assets/styles/hamburger.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import UsesPage from "./components/UsesPage";
import WorksPage from "./components/WorksPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App w-screen h-screen font-medium text-white">
        <Header />
        <div className="max-w-screen-sm m-auto pr-4 pl-4 pt-24 pb-16">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/works" element={<WorksPage />}></Route>
            <Route path="/uses" element={<UsesPage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
