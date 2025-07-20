import { SidePanel } from "./components/SidePanel/SidePanel";

function App() {
  return (
    <>
      <SidePanel
        isOpen={true}
        title="Sidepanel title"
        description="Sidepanel description"
        submitButtonText="Submit"
      >
        <h1>test</h1>
      </SidePanel>
    </>
  );
}

export default App;
