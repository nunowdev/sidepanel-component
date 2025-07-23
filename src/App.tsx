import { SidePanel } from "./components/SidePanel/SidePanel";
import "./index.css";

function App() {
  return (
    <>
      <button>Open Sidepanel</button>
      <SidePanel
        position="right"
        isOpen={true}
        title="Add Values"
        submitButtonText="Submit"
        hasFooter={false}
        width={400}
      >
        <h1>test</h1>
      </SidePanel>
    </>
  );
}

export default App;
