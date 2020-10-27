import React from "react";

/*
InternalLink should be only used to link to fragment urls placed within a Accordion, in the same page.
`href` props should only contain a fragment prefixed with "link-" (start with "#link-")
It allows all the same props as <a/> tag. 
*/
const InternalLink = ({ href, className = "navlink", ...otherProps }) => {
  if (!href.startsWith("#link-")) {
    throw new TypeError(
      "InternalLink - href must start with #. It should only be used for same-page fragment links."
    );
  }

  const handleLink = () => {
    // manually change hash to trigger hashChange event.
    window.location.hash = "#";
    window.location.hash = href;
  };

  return <a onClick={handleLink} className={className} href={href} {...otherProps}></a>;
};

export default InternalLink;
