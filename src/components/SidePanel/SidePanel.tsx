import React from "react";
import ReactDOM from "react-dom";
import {
  Overlay,
  Sidepanel,
  SidepanelBody,
  SidepanelFooter,
  SidepanelHeader,
} from "./styles";
import { Button } from "../Button/Button";

type SidePanelProps = {
  title: string;
  description?: string;
  submitButtonText: string;
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

        <SidepanelBody>{children}</SidepanelBody>

        {hasFooter && (
          <SidepanelFooter>
            <Button
              text="Cancel"
              color="secondary"
              width={120}
              onClick={onClose}
            />
            <Button
              text={submitButtonText}
              color="primary"
              width={120}
              onClick={onSubmit}
            />
          </SidepanelFooter>
        )}
      </Sidepanel>
    </Overlay>,
    document.body
  );
};
