import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'
import Content from './content'

const App = () => {
    return (
        <>
            <Title title="React" year={2020} />

            <Title title="Vitaliy" year={2023} />

            <Content text1="godby America" text2="hello bro" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
