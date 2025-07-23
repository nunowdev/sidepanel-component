import { styled } from "@linaria/react";

type SidepanelProps = {
  position: "right" | "left";
  width: number;
};

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Sidepanel = styled.div<SidepanelProps>`
  width: ${(props) => props.width}px;
  border-radius: 10px;
  height: 100%;
  background-color: rgb(29, 29, 29);
  position: absolute;
  top: 0;
  left: ${(props) => (props.position === "left" ? "0" : "auto")};
  right: ${(props) => (props.position === "right" ? "0" : "auto")};

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

export { Overlay, Sidepanel };
