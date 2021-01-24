import { ReactElement, useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-dark.css';
import javascript from 'highlight.js/lib/languages/javascript';
import './style.css';
hljs.registerLanguage('javascript', javascript);

export default function HighLight({ code, language }: { code: string, language: string }) : ReactElement {

    const ref = useRef(null);

    useEffect(() => {
        hljs.highlightBlock(ref.current)
    }, [])

    return (
        <code className={language} ref={ref}>
            { code }
        </code>
    )
}
