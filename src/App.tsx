import { useState } from "react";
import { SidePanel } from "./components/SidePanel/SidePanel";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { useSidePanel } from "./hooks/useSidePanel";
import "./index.css";
import "./App.css";
import { Button } from "./components/Button/Button";
import { AnimatedListItem } from "./components/AnimatedListItem/AnimatedListItem";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [values, setValues] = useState<string[]>([]);
  const {
    isOpen: isSidePanelOpen,
    openSidePanel,
    closeSidePanel,
  } = useSidePanel();

  function addValueToList() {
    if (!searchValue || values.includes(searchValue)) return;
    setValues([...values, searchValue]);
    setSearchValue("");
  }

  function removeValueFromList(valueToRemove: string) {
    setValues((prev) => prev.filter((val) => val !== valueToRemove));
  }

  // TODO: Add scale animation to icons
  // TODO: Handle value list scroll
  // TODO: Add value when clicking enter on input

  return (
    <>
      <button onClick={openSidePanel}>Open Side Panel</button>
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
          setValues([]);
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
          disabled={!searchValue || values.includes(searchValue)}
          onClick={addValueToList}
        />
        <div className="sidepanel-value-list">
          {values.map((value) => (
            <AnimatedListItem
              key={value}
              value={value}
              onRemove={() => removeValueFromList(value)}
            />
          ))}
        </div>
      </SidePanel>
    </>
  );
}

export default App;
