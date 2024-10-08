import { useState } from "react";
import "./App.css";
import SelectUniversity from "./components/selectUniversity/SelectUniversity";

function App() {
  const [isSelectEnabled, setIsSelectEnabled] = useState(false);

  function handleButtonClick() {
    setIsSelectEnabled(!isSelectEnabled);
  }

  return (
    <>
      <button
        onClick={handleButtonClick}
        style={{ backgroundColor: !isSelectEnabled ? "green" : "red" }}>
        {!isSelectEnabled ? "Click to enable" : "Click to disable"}{" "}
        SelectUniversity component
      </button>

      <SelectUniversity
        disabled={!isSelectEnabled}
        label="Search an university in the world:"
        onObjectSelected={(item: string) => {
          console.log(`Element selected ${JSON.stringify(item)}`);
        }}
      />
    </>
  );
}

export default App;
