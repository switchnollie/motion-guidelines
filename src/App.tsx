import React from "react";
import Column from "./components/Column";

const App: React.FC = () => {
  return (
    <div className="App">
      <Column highlightBackground></Column>
      <Column />
      <Column />
    </div>
  );
};

export default App;
