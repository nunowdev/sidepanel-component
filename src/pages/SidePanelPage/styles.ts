import { styled } from "@linaria/react";

const SidePanelPageWrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101010;

  .sidepanel-value-wrapper {
    width: 100%;
    min-height: 52px;
    border-radius: 4px;
    background-color: #3e3e3e;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    transition: all 0.3s ease;
  }

  .sidepanel-value {
    font-family: "IBM Plex Mono", monospace;
    color: pink;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .animated-icon {
    transition: all 350ms ease;
  }

  .animated-icon:hover {
    transform: scale(1.2);
  }
`;

const SidePanelValueList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  gap: 12px;
  margin-top: 12px;
`;

export { SidePanelPageWrapper, SidePanelValueList };
