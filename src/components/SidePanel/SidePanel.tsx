import React from "react";
import ReactDOM from "react-dom";
import { Overlay, Sidepanel } from "./styles";

type SidePanelProps = {
  title: string;
  submitButtonText?: string;
  isOpen: boolean;
  onSubmit?: () => void;
  children: React.ReactNode;
  hasFooter: boolean;
  width: number;
  position: "left" | "right";
};

export const SidePanel = ({
  title,
  submitButtonText,
  isOpen,
  onSubmit,
  children,
  hasFooter,
  width,
  position,
}: SidePanelProps) => {
  if (!isOpen) return null;
  console.log(position);
  return ReactDOM.createPortal(
    <Overlay>
      <Sidepanel
        position={position}
        width={width}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sidepanel-header">
          <h2>{title}</h2>
        </div>

        <div className="sidepanel-body">{children}</div>

        {hasFooter && (
          <div className="sidepanel-footer">
            <button>Cancel</button>
            {submitButtonText && (
              <button onClick={onSubmit}>{submitButtonText}</button>
            )}
          </div>
        )}
      </Sidepanel>
    </Overlay>,
    document.body
  );
};
