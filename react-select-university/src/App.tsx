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
      <button onClick={handleButtonClick}>
        Toggle SelectUniversity component
      </button>

      <SelectUniversity
        disabled={isSelectEnabled}
        label="Search an university in the world:"
        onObjectSelected={(item: string) => {
          console.log(`Selezionato elemento ${JSON.stringify(item)}`);
        }}
      />
    </>
  );
}

export default App;
