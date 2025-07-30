import { styled } from "@linaria/react";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Sidepanel = styled.div<{
  position: "right" | "left";
  width: number;
}>`
  width: ${(props) => props.width}px;
  border-radius: 10px;
  height: 100%;
  background-color: rgb(29, 29, 29);
  position: absolute;
  top: 0;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  left: ${(props) => (props.position === "left" ? "0" : "auto")};
  right: ${(props) => (props.position === "right" ? "0" : "auto")};
  animation: slideIn 0.4s ease-in;

  @keyframes slideIn {
    from {
      transform: translateX(
        ${(props) => (props.position === "right" ? "100%" : "-100%")}
      );
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    left: ${(props) => (props.position === "right" ? "0" : "auto")};
    right: ${(props) => (props.position === "left" ? "0" : "auto")};
    background: linear-gradient(
      to bottom,
      rgb(29, 29, 29) 0%,
      pink 50%,
      rgb(29, 29, 29) 100%
    );
  }
`;

const SidepanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 16px;
  color: white;

  h1 {
    font-family: "IBM Plex Mono", monospace;
    font-size: 32px;
  }

  h2 {
    font-family: "Intel One Mono", monospace;
    font-size: 16px;
    margin-top: 8px;
    color: pink;
  }
`;

const SidepanelBody = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SidepanelFooter = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 12px;
`;

export { Overlay, Sidepanel, SidepanelHeader, SidepanelBody, SidepanelFooter };
