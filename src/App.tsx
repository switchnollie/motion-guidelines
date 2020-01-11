import React from "react";
import LeftColumn from "./components/LeftColumn";
import CenterColumn from "./components/CenterColumn";
import RightColumn from "./components/RightColumn";

const App: React.FC = () => {
  return (
    <div className="App">
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
    </div>
  );
};

export default App;
