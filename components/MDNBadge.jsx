import React from "react";
import styles from "./MDNBadge.module.css";

export default function MDNBadge({ title, url, i }) {
  // i stands for "is inline?" - default false
  const wrapperClass = i ? styles.wrapperInline : styles.wrapperBlock;
  const imgClass = i ? styles.imgInline : styles.imgBlock;

  return (
    <a
      href={url}
      className={wrapperClass}
      target="_blank"
      rel="noopener noreferer"
    >
      <img
        className={imgClass}
        src={`https://img.shields.io/badge/MDN-${title}-c2e8f9?logo=MDN%20Web%20Docs&style=flat-square`}
      />
    </a>
  );
}

MDNBadge.defaultProps = {
  i: false,
};
