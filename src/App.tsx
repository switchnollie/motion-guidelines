import React, { useState } from "react";
import LeftColumn from "./components/LeftColumn";
import CenterColumn from "./components/CenterColumn";
import RightColumn from "./components/RightColumn";

const App: React.FC = () => {
  const [lastAnimate, setLastAnimate] = useState(0);
  return (
    <div className="App">
      <LeftColumn lastAnimate={lastAnimate} />
      <CenterColumn lastAnimate={lastAnimate} setLastAnimate={setLastAnimate} />
      <RightColumn />
    </div>
  );
};

export default App;
