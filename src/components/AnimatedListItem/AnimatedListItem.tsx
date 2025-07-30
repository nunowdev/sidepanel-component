import { useEffect, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import gsap from "gsap";
import { ListItem } from "./styles";

type Props = {
  itemName: string;
  onRemove: () => void;
};

export const AnimatedListItem = ({ itemName, onRemove }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleAdd = () => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  const handleRemove = async () => {
    if (!ref.current) return;

    await gsap.to(ref.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power1.in",
    });

    onRemove();
  };

  useEffect(() => {
    handleAdd();
  }, []);

  return (
    <ListItem ref={ref}>
      <div className="item">{itemName}</div>
      <FaTrash
        cursor="pointer"
        color="pink"
        onClick={handleRemove}
        className="animated-icon"
      />
    </ListItem>
  );
};
