import { useState } from "react";

export const useSidePanel = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openSidePanel = () => setIsOpen(true);
  const closeSidePanel = () => setIsOpen(false);
  const toggleSidePanel = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    openSidePanel,
    closeSidePanel,
    toggleSidePanel,
  };
};
