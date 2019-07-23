import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import NavBar from "./features/page/NavBar";
import TableRoot from "./features/tables/TableRoot";
import GraphRoot from "./features/graphs/GraphRoot";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <TableRoot path="/tables" />
        <GraphRoot path="/graphs" />
      </Router>
    </div>
  );
}

export default App;
