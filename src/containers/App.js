import React from "react";
import "./App.css";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import store from "../store";
import _ from "lodash";

function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}></Sidebar>
      <Main></Main>
    </div>
  );
}

export default App;
