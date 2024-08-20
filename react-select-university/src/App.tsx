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
      <button onClick={handleButtonClick}>Toggle Select component below</button>

      <SelectUniversity
        disabled={isSelectEnabled}
        label="Università nel mondo:"
        onObjectSelected={(item: string) => {
          console.log(`Selezionato elemento ${JSON.stringify(item)}`);
        }}
      />
    </>
  );
}

export default App;
