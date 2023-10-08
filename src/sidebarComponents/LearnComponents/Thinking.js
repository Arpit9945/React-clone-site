import React from 'react'

const Thinking = () => {
    return (
        <div>
            <p className="fs-1 text-dark fw-bold">
                Thinking in React
            </p>
            <p className="fs-4 text-dark fw-light">
                React can change how you think about the designs you look at and the apps you build.
                When you build a user interface with React, you will first break it apart into
                pieces called components. Then, you will describe the different visual states
                for each of your components. Finally, you will connect your components together
                so that the data flows through them. In this tutorial, we'll guide you
                through the thought process of building a searchable product data
                table with React.
            </p>
            <p className="fs-2 fw-bold text-dark">
                Start with the mockup
            </p>
            <p className="fs-4 fw-light">
                Imagine that you already have a JSON API and a mockup from a designer.
            </p>
            <p className="fs-4 fw-light">
                The JSON API returns some data that looks like this:
            </p>

            <p className="fs-2 text-dark fw-bold">
                Step 1: Break the UI into a component hierarchy
            </p>
            <p className="fs-4 text-dark fw-light">
                Start by drawing boxes around every component and subcomponent in the mockup and naming them.
                If you
                work with a designer, they may have already named these components in their design tool. Ask them!
            </p>
            <p className="fs-4 text-dark fw-light">
            Depending on your background, you can think about splitting up a design into 
            components in different ways:
            </p>

        </div>
    )
}

export default Thinking
