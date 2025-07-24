import { useState } from "react";
import { SidePanel } from "./components/SidePanel/SidePanel";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { useSidePanel } from "./hooks/useSidePanel";
import "./index.css";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [values, setValues] = useState<string[]>([]);
  const {
    isOpen: isSidePanelOpen,
    openSidePanel,
    closeSidePanel,
  } = useSidePanel();

  function addValueToList() {
    setValues([...values, searchValue]);
  }

  function clearValues() {
    setValues([]);
  }

  return (
    <>
      <button onClick={openSidePanel}>Open Side Panel </button>
      <SidePanel
        position="right"
        isOpen={isSidePanelOpen}
        title="Add Values"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        submitButtonText="Submit"
        hasFooter={true}
        width={400}
        onClose={() => {
          closeSidePanel();
          clearValues();
        }}
      >
        <SearchInput
          value={searchValue}
          onInputChange={setSearchValue}
          placeholder="Insert value name..."
          inputWidth={350}
          className="sidepanel-searchinput"
        />
        <Button
          text="Add Value"
          color="primary"
          width={120}
          onClick={addValueToList}
        />
        {values.map((value) => (
          <p>{value}</p>
        ))}
      </SidePanel>
    </>
  );
}

export default App;
