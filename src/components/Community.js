import React from 'react'

const Community = () => {

    function feedback() {
        document.getElementById('feed').innerHTML = 'Thanks for feedback.';
        document.getElementById('none').style.display = 'none';
        document.getElementById('none2').style.display = 'none';
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row gap-5 mt-4 fs-4 fw-bold" id='row-colors'>
                    {/* -----------------------------------Column-1----------------------------------------------------------- */}
                    <div className="col-md-3 col-lg-3 col-sm-12 overflow-auto" id='compos'
                        style={{ display: 'block', height: '100vh' }}>

                        <div>
                            <p className='fs-6'>GET INVOLVED</p>

                            <div className="accordion" style={{
                                width: "100%",
                                borderRadius: "0 20px 20px 0"
                            }}
                                id="accordionExample">
                                <div className="accordion-item" style={{
                                    border: "none",
                                    overflow: 'hidden', height: 'auto', borderRadius: "0 20px 20px 0"
                                }}>
                                    <h2 className="accordion-header" style={{ borderRadius: "0 20px 20px 0" }}>
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <p id='first-layer' className='fs-5 fw-bold'>Community</p>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className='fw-light fs-5'>React Conference</p>
                                            <p className='fw-light fs-5'>React Meetups</p>
                                            <p className='fw-light fs-5'>React videoes</p>
                                            <p className='fw-light fs-5'>React videoes</p>
                                            <p className='fw-light fs-5'>Meet the team</p>
                                            <p className='fw-light fs-5'>Docs contributer</p>
                                            <p className='fw-light fs-5'>Acknowledgements</p>
                                            <p className='fw-light fs-5'>Versioning Policy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* ------------------------------------Scrolling fix--------------------------------------------- */}

                        <div className=''>
                            <div className="container fix mt-3">
                                <div className="fs-4 text-dark" id='feed'>Is this page useful?</div>
                                <div>
                                    <i className="fa-regular fa-thumbs-up" id='none' style={{
                                        fontSize: 'xx-large',
                                        cursor: 'pointer'
                                    }} onClick={feedback}></i> &nbsp;
                                    <i className="fa-regular fa-thumbs-down" id='none2' style={{
                                        fontSize: 'xx-large',
                                        cursor: 'pointer'
                                    }} onClick={feedback}></i>
                                </div>
                            </div>
                        </div>

                        <br />
                        <br />
                        <br />

                        {/* ------------------------------------Scrolling fix☻--------------------------------------------- */}



                    </div>


                    {/* -------------------X---------------Column-1--------------------X-------------------------------------- */}

                    {/* -----------------------------------Column-2----------------------------------------------------------- */}

                    <div className="col-md-8 col-lg-8 col-sm-12 overflow-auto"
                        style={{ height: '100vh' }}>
                        <p className='text-primary fs-6'>COMMUNITY &nbsp; <i className="fa-solid fa-caret-right"></i></p>

                        <p className='fs-1 text-dark'>React Community</p>
                        <p className='text-dark'>React has a community of millions of developers. On this page we've listed some
                            React-related communities that you can be a part of;
                            see the other pages in this section for additional
                            online and in-person learning materials.</p>


                        <p className='fs-2 mt-5 text-dark'>Code of Conduct</p>
                        <p>Before participating in React's communities,
                            <span style={{ color: '#4FA3BE' }}>  please read our Code of Conduct.</span>
                            We have adopted the<span style={{ color: '#4FA3BE' }}> Contributor
                                Covenant</span> and we expect that all community members adhere to the
                            guidelines within.
                        </p>


                        <p className='fs-2 mt-5 text-dark'>Stake overflow</p>
                        <p>Stack Overflow is a popular forum to ask code-level
                            questions or if you're stuck with a specific error.
                            Read through the <span style={{ color: '#4FA3BE' }}>existing questions</span> tagged with
                            reactjs or <span style={{ color: '#4FA3BE' }}>ask your own!</span>
                        </p>


                        <p className='text-dark fs-1 mt-5'>Popular Discussion Forums</p>
                        <p className='fw-light'>There are many online forums which are a great place
                            for discussion about best practices and application architecture
                            as well as the future of React.
                            If you have an answerable code-level question,
                            Stack Overflow is usually a better fit.
                            <br /> <br />
                            Each community consists of many thousands of React users.</p>
                        <ul>
                            <li style={{ color: '#4FA3BE' }} className='fw-light m-2'>DEV's React community</li>
                            <li style={{ color: '#4FA3BE' }} className='fw-light m-2'>Hashnode's React community</li>
                            <li style={{ color: '#4FA3BE' }} className='fw-light m-2'>Reactiflux online chat</li>
                            <li style={{ color: '#4FA3BE' }} className='fw-light m-2'>Reddit's React community</li>
                        </ul>

                        <p className='fs-2 mt-5 text-dark'>Stake overflow</p>
                        <p className="fw-light">For the latest news about React,
                            <span style={{ color: '#4FA3BE' }}>follow @reactjs on Twitter
                            </span> and the <span style={{ color: '#4FA3BE' }}>official React blog </span>
                            on this website.
                        </p>


                        {/* --------------------------------------------Footer---------------------------------------------------------- */}

                        <div className="container-fluid text-center mt-5">
                            <hr className='mb-5' />
                            <p className="fs-3 fw-bold text-dark">How do you like these docs?</p>
                            <button className='btns p-3 rounded-pill text-light'
                                style={{ backgroundColor: '#087EA4' }}>Take our survey! &nbsp;
                                <i class="fa-solid fa-chevron-right"></i></button>
                            <hr className='mt-5' />
                        </div>

                        <div className="main-footer">


                            <div>
                                <p className='fs-5 text-dark'>
                                    <i class="fa-brands fa-meta" style={{ color: '#015efe' }}></i> MetaOpenSource
                                </p>
                                <p className='fs-6'>@2023</p>
                            </div>

                            <div>
                                <p className="fs-5 text-dark">Learn React</p>
                                <p className='fs-6'>Quick Start</p>
                                <p className='fs-6'>Installation</p>
                                <p className='fs-6'>Describing the UI</p>
                                <p className='fs-6'>Adding inetractivity</p>
                                <p className='fs-6'>Managing state</p>
                                <p className='fs-6'>Escaping hatches</p>
                            </div>

                            <div>
                                <p className="fs-5 text-dark">API Reference</p>
                                <p className='fs-6'>React APIs</p>
                                <p className='fs-6'>React DOM APIs</p>
                            </div>

                            <div>
                                <p className="fs-5 text-dark">Community</p>
                                <p className='fs-6'>Code of conduct</p>
                                <p className='fs-6'>Meet the team</p>
                                <p className='fs-6'>Docs contributer</p>
                                <p className='fs-6'>Acknowledgements</p>
                            </div>

                            <div>
                                <p className="fs-5 text-dark">More</p>
                                <p className='fs-6'>Blog</p>
                                <p className='fs-6'>React native</p>
                                <p className='fs-6'>Privacy</p>
                                <p className='fs-6'>Terms</p>
                                <div className='flex justify-content-around'>
                                    <span>
                                        <i class="fa-brands fa-facebook"></i>
                                    </span>
                                    <span>
                                        <i class="fa-brands fa-x-twitter"></i>
                                    </span>
                                    <span>
                                        <i class="fa-brands fa-github"></i>
                                    </span>
                                </div>
                            </div>

                        </div>


                        {/* -------------------------X------------------Footer--------------------------X------------------------------- */}


                    </div>
                    {/* --------------X--------------------Column-2------------------X---------------------------------------- */}

                </div>
            </div>
        </div>
    )
}

export default Community;
