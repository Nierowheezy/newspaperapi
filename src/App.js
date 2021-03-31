import React from "react";
import News from "./components/News";
import { NewsContextProvider } from "./context/NewsContext";
import "./App.css";

const App = () => {
  return (
    <NewsContextProvider>
      <News />
      <h1 style={{ textAlign: "center" }}>{process.env.REACT_APP_API_URL}</h1>
      <br />
    </NewsContextProvider>
  );
};

export default App;
