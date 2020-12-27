import { ReactElement } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';
import javascript from 'highlight.js/lib/languages/javascript';
import './style.css';
hljs.registerLanguage('javascript', javascript);

export default function HighLight({ children } : { children: string }) : ReactElement {
    return (
        <div className="code" dangerouslySetInnerHTML={
            { __html: hljs.highlight('javascript', children).value }
        } />
    )
}
