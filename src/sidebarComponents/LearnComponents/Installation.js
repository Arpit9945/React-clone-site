import React from 'react'

const Installation = () => {
    return (
        <div>
            <p className="fs-1 fw-bold text-dark">
                Installation
            </p>
            <p className="fs-3 fw-light text-dark">
                React has been designed from the start for gradual adoption. You can use as little or as
                much React as you need. Whether you want to get a taste of React, add some
                interactivity to an HTML page, or start a complex React-powered app,
                this section will help you get started.
            </p>
            <div className="container p-5" id="lists">
                <p className="fs-3 fw-bold text-dark">
                    in this chapter
                </p>
                <ul className='fw-light' style={{ color: '#4FA3BE' }}>
                    <li>How to start a new react project</li>
                    <li>How to add react to an existing project</li>
                    <li>How to setup your editor</li>
                    <li>How to instal react developer tools</li>
                </ul>
            </div>
        </div>
    )
}

export default Installation
