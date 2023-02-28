import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'
const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis earum ipsa consequuntur sed placeat, amet, iusto
                obcaecati dolore consequatur esse tenetur culpa quis optio
                perspiciatis velit eligendi eaque, non assumenda.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                laborum tempora expedita similique earum mollitia, odio unde,
                quod quaerat consequatur incidunt consequuntur excepturi
                necessitatibus enim qui dolorem distinctio laboriosam quis!
            </p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title title="React" year={2020} />

            <Title title="Vitaliy" year={2023} />

            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
