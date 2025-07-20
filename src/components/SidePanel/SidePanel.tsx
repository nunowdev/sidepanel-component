import React from "react";
import ReactDOM from "react-dom";

type SidePanelProps = {
  title: string;
  description?: string;
  submitButtonText?: string;
  isOpen: boolean;
  onSubmit?: () => void;
  children: React.ReactNode;
};

export const SidePanel = ({
  title,
  description,
  submitButtonText,
  isOpen,
  onSubmit,
  children,
}: SidePanelProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="sidepanel-overlay">
      <div className="sidepanel" onClick={(e) => e.stopPropagation()}>
        <div className="sidepanel-header">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <div className="sidepanel-body">{children}</div>

        <div className="sidepanel-footer">
          <button>Cancel</button>
          {submitButtonText && (
            <button onClick={onSubmit}>{submitButtonText}</button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
