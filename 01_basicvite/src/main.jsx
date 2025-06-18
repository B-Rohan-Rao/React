import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from "react";

const Reactcomp = (<a href="https://google.com" target="_blank">I am an html component</a>);

const reactComponent = React.createElement(  //The new way (React 18+) to render a React app into the DOM.
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me',
        // 2+2 Witing something here is same as writing a js logic in "{}" in a React component.

)    //This is the same as we created the custom react in "02_cutomreact"

createRoot(document.getElementById('root')).render(
    // <App />
    // Reactcomp
    reactComponent
)
