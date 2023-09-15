import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Code from "../code/Code";
import "./styles.css";

export default function Markdown() {
  const defaultInput = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

~~~js
// this is multi-line code:

function greetSomeone(name) {
  console.log("Hello " + name + "!")
}
~~~

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ------------ | ------------- | ------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

  const [input, setInput] = useState(defaultInput);
  const [display, setDisplay] = useState(true);

  const editorClass = display
    ? "editor-container"
    : "editor-container minimize";
  const previewClass = display
    ? "preview-container"
    : "preview-container maximize";
  const btnClass = display ? "sidebar" : "sidebar shrink";
  const arrowIcon = display ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-caret-left-fill"
      viewBox="0 0 16 16"
    >
      <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-caret-right-fill"
      viewBox="0 0 16 16"
    >
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
    </svg>
  );

  const hideEditor = () => setDisplay(!display);

  return (
    <div className="main-container">
      {/* Editor */}
      <div className={editorClass}>
        <h1>Edit your preview here!</h1>
        <textarea
          autoFocus
          id="editor"
          className="editor form-control"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>
      </div>

      {/* Sidebar */}
      <button className={btnClass} onClick={hideEditor}>
        {arrowIcon}
      </button>

      {/* Preview */}
      <div id="preview" className={previewClass}>
        <ReactMarkdown
          children={input}
          remarkPlugins={[remarkGfm]}
          className="preview"
          components={{ code: Code }}
        />
      </div>
    </div>
  );
}
