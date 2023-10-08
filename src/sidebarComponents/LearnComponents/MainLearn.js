import React from 'react'

const MainLearn = () => {
    return (
        <div>
            <p className="fs-1 fw-bold text-dark">Quick start</p>
            <p className="fs-4 text-dark">Welcome to the React documentation!
                This page will give you an introduction to the 80% of React
                concepts that you will use on a daily basis.
            </p>

            <div className="container p-5" id="lists">
                <p className="fs-2 fw-bold text-dark">You will learn</p>
                <ul className='fw-light'>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </div>

            <p className="fs-1 text-dark fw-bold mt-5">
                Creating and nesting components
            </p>
            <p className="fs-4 fw-light">
                React apps are made out of components. A component is a piece of the
                UI (user interface) that has its own logic and appearance.
                A component can be as small as a button, or as
                large as an entire page.
            </p>

            <p className="fs-4 fw-light ">
                React components are JavaScript functions that return markup:
            </p>

            <p className="fs-1 fw-bold text-dark">
                Writing markup with JSX
            </p>
            <p className="fs-4 fw-light">
                The markup syntax you've seen above is called JSX. It is optional,
                but most React projects use JSX for its convenience. All of the
                <span style={{ color: '#4FA3BE' }}> tools we recommend for local development
                </span>
                support JSX out of the box.
            </p>

        </div>
    )
}

export default MainLearn
