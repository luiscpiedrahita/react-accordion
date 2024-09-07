export function AccordionItem({ title, num, text, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    console.log(curOpen !== null);
    onOpen((curOpen) => (isOpen ? null : num));
  }

  return (
    <div className={`item${isOpen ? " open" : ""}`} onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "+" : "-"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
