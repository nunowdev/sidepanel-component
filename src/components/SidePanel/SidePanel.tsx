import React from "react";
import ReactDOM from "react-dom";
import { Overlay, Sidepanel, SidepanelHeader } from "./styles";

type SidePanelProps = {
  title: string;
  description?: string;
  submitButtonText?: string;
  isOpen: boolean;
  onSubmit?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
  hasFooter: boolean;
  width: number;
  position: "left" | "right";
};

export const SidePanel = ({
  title,
  description,
  submitButtonText,
  isOpen,
  onSubmit,
  onClose,
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
        <SidepanelHeader>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </SidepanelHeader>

        <div className="sidepanel-body">{children}</div>

        {hasFooter && (
          <div className="sidepanel-footer">
            <button onClick={onClose}>Cancel</button>
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
