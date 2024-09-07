import { useState } from "react";

export function AccordionItem({ title, num, text }) {
  const [isOpen, setIsopen] = useState(false);

  function handleToggle() {
    setIsopen((isOpen) => !isOpen);
    console.log(isOpen);
  }

  return (
    <div className="item" onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "+" : "-"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
