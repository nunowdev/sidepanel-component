import { useState } from "react";
import { SidePanel } from "../../components/SidePanel/SidePanel";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { useSidePanel } from "../../hooks/useSidePanel";
import { Button } from "../../components/Button/Button";
import { AnimatedListItem } from "../../components/AnimatedListItem/AnimatedListItem";
import { SidePanelPageWrapper, SidePanelValueList } from "./styles";

function SidePanelPage() {
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

  function handleSubmit() {
    // DO SOMETHING WITH THE VALUES :-)
    console.log(values);
  }

  // TODO: UNIT TESTS
  return (
    <SidePanelPageWrapper>
      <Button
        color="primary"
        width={320}
        onClick={openSidePanel}
        text="Open Side Panel"
      />
      <SidePanel
        position="right"
        isOpen={isSidePanelOpen}
        title="Add Values"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        submitButtonText="Submit"
        hasFooter={true}
        width={400}
        onSubmit={() => {
          handleSubmit();
        }}
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
          className="add-value-button"
        />
        <SidePanelValueList>
          {values.map((value) => (
            <AnimatedListItem
              key={value}
              itemName={value}
              onRemove={() => removeValueFromList(value)}
            />
          ))}
        </SidePanelValueList>
      </SidePanel>
    </SidePanelPageWrapper>
  );
}

export default SidePanelPage;
