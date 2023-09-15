import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <SyntaxHighlighter
      {...props}
      children={String(children).replace(/\n$/, "")}
      style={oneDark}
      language={match[1]}
      PreTag="div"
    />
  ) : (
    <code {...props} className={className}>
      {children}
    </code>
  );
}