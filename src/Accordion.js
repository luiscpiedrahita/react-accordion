import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          key={i}
          title={el.title}
          num={i}
          text={el.text}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </div>
  );
}
