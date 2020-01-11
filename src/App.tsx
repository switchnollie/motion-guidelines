import React from "react";
import Column from "./components/Column";

const App: React.FC = () => {
  return (
    <div className="App">
      <Column highlightBackground>
        <h1>Motion Guidelines</h1>
      </Column>
      <Column />
      <Column />
    </div>
  );
};

export default App;
