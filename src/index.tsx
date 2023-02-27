import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement(
//     'h1',
//     {
//         id: 'red',
//         className: 'red',
//     },
//     'Hello react'
// )

const title = <h1 className="red">Test</h1>
const list = (
    <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
    </ul>
)
const content = (
    <div>
        {title}
        {list}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
