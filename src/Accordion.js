import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem key={i} title={el.title} num={i} text={el.text} />
      ))}
    </div>
  );
}
