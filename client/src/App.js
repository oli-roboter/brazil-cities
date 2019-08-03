import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import TablePage from "./features/pages/TablePage";
import GraphPage from "./features/pages/GraphPage";
import Landing from "./features/pages/Landing";
import NotFound from "./features/pages/404/NotFound";
import ErrorPage from "./features/pages/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Landing path="/" />
        <Main path="/*" />
        <NotFound default />
      </Router>
    </div>
  );
};

const Main = () => (
  <Router>
    <TablePage path="/tables" />
    <GraphPage path="/graphs" />
    <ErrorPage path="/400500" />
    <NotFound default />
  </Router>
);

export default App;
