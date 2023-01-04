import "./assets/styles/style.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import WorksPage from "./components/WorksPage";
import styled from "styled-components";
import { sm } from "../src/components/media";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/works" element={<WorksPage />}></Route>
        </Routes>
      </Main>
    </Router>
  );
}

export default App;

const Main = styled.main`
  max-width: 640px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 5rem;
  padding-right: 1.5rem;
  padding-bottom: 4rem;
  padding-left: 1.5rem;

  ${sm`
  padding-right: 0;
  padding-left: 0;
  `}
`;
