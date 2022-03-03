import { css } from 'styled-jsx/css';

export default css.global`
    .cm-s-monokai.CodeMirror {
        background-color: inherit;
        color: #f8f8f2;
        font-family: 'Roboto Mono', monospace;
        height: 100%;
    }
    .cm-s-monokai div.CodeMirror-selected {
        background: #49483e;
    }
    .cm-s-monokai .CodeMirror-line::selection,
    .cm-s-monokai .CodeMirror-line > span::selection,
    .cm-s-monokai .CodeMirror-line > span > span::selection {
        background: rgba(73, 72, 62, 0.99);
    }
    .cm-s-monokai .CodeMirror-line::-moz-selection,
    .cm-s-monokai .CodeMirror-line > span::-moz-selection,
    .cm-s-monokai .CodeMirror-line > span > span::-moz-selection {
        background: rgba(73, 72, 62, 0.99);
    }
    .cm-s-monokai .CodeMirror-gutters {
        background: #282c34;
        border-right: 0px;
    }
    .cm-s-monokai .CodeMirror-guttermarker {
        color: white;
    }
    .cm-s-monokai .CodeMirror-guttermarker-subtle {
        color: #d0d0d0;
    }
    .cm-s-monokai .CodeMirror-linenumbers {
        width: 48px;
    }
    .cm-s-monokai .CodeMirror-linenumber {
        color: #4b5262;
        padding: 0 15px 0 0;
    }
    .cm-s-monokai .CodeMirror-cursor {
        border-left: 1px solid #f8f8f0;
    }

    .cm-s-monokai span.cm-comment {
        color: #75715e;
    }
    .cm-s-monokai span.cm-atom {
        color: #ae81ff;
    }
    .cm-s-monokai span.cm-number {
        color: #ae81ff;
    }

    .cm-s-monokai span.cm-property,
    .cm-s-monokai span.cm-attribute {
        color: #a6e22e;
    }
    .cm-s-monokai span.cm-keyword {
        color: #f92672;
    }
    .cm-s-monokai span.cm-builtin {
        color: #66d9ef;
    }
    .cm-s-monokai span.cm-string {
        color: #e6db74;
    }

    .cm-s-monokai span.cm-variable {
        color: #f8f8f2;
    }
    .cm-s-monokai span.cm-variable-2 {
        color: #9effff;
    }
    .cm-s-monokai span.cm-variable-3 {
        color: #66d9ef;
    }
    .cm-s-monokai span.cm-def {
        color: #fd971f;
    }
    .cm-s-monokai span.cm-bracket {
        color: #f8f8f2;
    }
    .cm-s-monokai span.cm-tag {
        color: #f92672;
    }
    .cm-s-monokai span.cm-header {
        color: #ae81ff;
    }
    .cm-s-monokai span.cm-link {
        color: #ae81ff;
    }
    .cm-s-monokai span.cm-error {
        background: #f92672;
        color: #f8f8f0;
    }

    .cm-s-monokai .CodeMirror-activeline-background {
        background: transparent;
    }
    .cm-s-monokai .CodeMirror-activeline .CodeMirror-linenumber {
        background: #373831;
    }
    .cm-s-monokai .CodeMirror-matchingbracket {
        text-decoration: underline;
        color: white !important;
    }
`;
