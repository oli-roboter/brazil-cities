import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import NavBar from "./features/page/NavBar";
import TableRoot from "./features/tables/TableRoot";
import GraphRoot from "./features/graphs/GraphRoot";
import Landing from "./features/page/Landing";
import NotFound from "./features/page/NotFound";

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
    <TableRoot path="/tables" />
    <GraphRoot path="/graphs" />
    <NotFound default />
  </Router>
);

export default App;
