import React from "react";
import News from "./components/News";
import { NewsContextProvider } from "./context/NewsContext";
import "./App.css";

const App = () => {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
};

export default App;
