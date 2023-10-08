import React from 'react'

const Tictac = () => {
    return (
        <div>
            <p className="fs-1 text-dark fw-bold">
                Tutorial: Tic-Tac-Toe
            </p>
            <p className="fs-4 text-dark fw-light">
                You will build a small tic-tac-toe game during this tutorial. This tutorial does
                not assume any existing React knowledge. The techniques you'll learn in the
                tutorial are fundamental
                to building any React app, and fully understanding it
                will give you a deep understanding of React.
            </p>

            <div className="container text-success p-5" id="lists">
                <p className='fs-2'><i class="fa-solid fa-pager"></i> Note</p>
                <p className="fs-4 fw-light text-secondary">
                    This tutorial is designed for people who prefer to <span className=' fw-bold text-dark'>
                        learn by doing</span> and want to
                    quickly try making something tangible. If you prefer learning each
                    concept step by step, start with  <span style={{ color: '#4FA3BE' }}>
                        Describing the UI.</span>
                </p>
            </div>
            <p className="fs-4 text-dark fw-light mt-5">
                The tutorial is divided into several sections:
            </p>
            <ul className='fw-light text-dark'>
                <li>
                    <span style={{ color: '#4FA3BE' }}>Setup for the tutorial
                    </span> will give you a starting point to follow the tutorial.
                </li>
                <li>
                    <span style={{ color: '#4FA3BE' }}>Overview
                    </span> will teach you the fundamentals of React:
                     components, props, and state.
                </li>
                <li>
                    <span style={{ color: '#4FA3BE' }}>Completing the game
                    </span> will teach you the most common techniques in React development.
                </li>
                <li>
                    <span style={{ color: '#4FA3BE' }}>Adding time travel
                    </span> will give you a deeper insight into the unique strengths of React.
                </li>
            </ul>
        </div>
    )
}

export default Tictac
