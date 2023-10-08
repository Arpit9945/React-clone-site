import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container pt-5 mt-5" style={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center', flexDirection: 'column'
            }}>
                <i class="fa-brands fa-react" id='react-logo' style={{
                    fontSize: '152px', color: '#087EA4'
                }}></i>
                <div className="container text-center mt-4">
                    <h1 style={{ fontSize: '58px' }}>React</h1>
                    <p className="fs-1">The library for web and native user interfaces</p>
                </div>

            </div>
            <div className="container text-center mt-5">
                <button type="button" className="btn p-3 fw-bold fs-4 text-light
                border rounded-pill"
                    style={{ backgroundColor: '#087EA4' }}>LEARN REACT</button>
                <button type="button" className="btn btn-light p-3 ms-3 fw-bold fs-4 
                border rounded-pill">API REFERENCE</button>
            </div>


            <div className="mt-5 p-1">
                <div className="container-fluid bg-secondary-subtle p-5 mt-5">
                    <div className="container text-center">
                        <p className="fw-bold text-dark" style={{ fontSize: '62px' }}>
                            Create user interfaces <br /> from components
                        </p>
                        <p className="fs-3">
                            React lets you build user interfaces out of individual pieces called components.
                            Create your own React components
                            like Thumbnail, LikeButton, and Video.
                            Then combine them into entire screens, pages, and apps.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
