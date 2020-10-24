import React, { useRef, useEffect } from "react";

const Accordion = ({ children, title = "More" }) => {
  const detailsRef = useRef(null);

  function openAccordionOnHash() {
    const hash = location.hash.substring(1);
    if (hash.length === 0) {
      return;
    }
    let targetElement;
    targetElement = document.getElementById(hash);
    if (targetElement === null) {
      return;
    }

    // 1. If target is within current details element
    const detailsElement = detailsRef.current;
    if (
      detailsElement !== null &&
      detailsElement.contains(targetElement)
    ) {
      // 2. and it is not open,
      if (!detailsElement.open) {
        // 3. Then open it
        detailsElement.open = true;
      }
      // 4. and scroll into view and focus
      targetElement.focus();
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  useEffect(() => {
    // 1. Add event listener for future hash changes
    window.addEventListener("hashchange", openAccordionOnHash);
    // 2. Do it anyway now if initial url has hash
    openAccordionOnHash()

    // Cleanup - remove listener
    return () => {
      window.removeEventListener("hashchange", openAccordionOnHash);
    };
  }, []);

  return (
    <details ref={detailsRef}>
      <summary>{title}</summary>
      {children}
    </details>
  );
};

export default Accordion;
