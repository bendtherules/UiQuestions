import React from "react";

const Accordion = ({ children, title = "More" }) => (
  <details>
    <summary>{title}</summary>
    {children}
  </details>
);

export default Accordion;
