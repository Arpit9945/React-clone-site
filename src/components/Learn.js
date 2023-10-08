import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Learn = () => {

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
              <p className='fs-6'>GET STARTED</p>

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
                      <Link to='/learn' style={{ color: 'black', textDecoration: 'none' }}>
                        <p id='first-layer' className='fs-5 fw-bold'>Quick start</p>
                      </Link>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <Link style={{ color: 'black', textDecoration: 'none' }} to='tictac'>
                        <p className='fw-light fs-5'>Tutorial:tic-tac-toe</p>
                      </Link>
                      <Link style={{ color: 'black', textDecoration: 'none' }} to='thinking'>
                        <p className='fw-light fs-5'>Thinking in react</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="accordion mt-1" style={{ width: "100%", borderRadius: "0 20px 20px 0" }}
              id="accordionExample">
              <div className="accordion-item" style={{
                border: "none",
                overflow: 'hidden', height: 'auto', borderRadius: "0 20px 20px 0"
              }}>
                <h2 className="accordion-header" style={{ borderRadius: "0 20px 20px 0" }}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <Link to='installation' style={{ color: 'black', textDecoration: 'none' }}>
                      <p id='first-layer' className='fs-5 fw-bold'>Installation</p>
                    </Link>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <Link to='starting' style={{ color: 'black', textDecoration: 'none' }}>
                    <p className='fw-light fs-5'>Starting a new project in react</p>
                    </Link>
                    <Link to='addreact' style={{ color: 'black', textDecoration: 'none' }}>
                    <p className='fw-light fs-5'>Add react to an existing project</p>
                    </Link>
                    <p className='fw-light fs-5'>Editor setup</p>
                    <p className='fw-light fs-5'>Using typescript</p>
                    <p className='fw-light fs-5'>React developer tools</p>
                  </div>
                </div>
              </div>
            </div>




            <br />
            <hr />

            <p className='fs-6'>LEARN REACT</p>

            <div className="accordion" style={{ width: "100%", borderRadius: "0 20px 20px 0" }}
              id="accordionExample">
              <div className="accordion-item" style={{
                border: "none",
                overflow: 'hidden', height: 'auto', borderRadius: "0 20px 20px 0"
              }}>
                <h2 className="accordion-header" style={{ borderRadius: "0 20px 20px 0" }}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <p id='first-layer' className='fs-5 fw-bold'>Describing The UI</p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='fw-light fs-5'>Your first component</p>
                    <p className='fw-light fs-5'>Importing and exporting components</p>
                    <p className='fw-light fs-5'>Writing markup with JSX</p>
                  </div>
                </div>
              </div>
            </div>



            <div className="accordion mt-1" style={{ width: "100%", borderRadius: "0 20px 20px 0" }}
              id="accordionExample">
              <div className="accordion-item" style={{
                border: "none",
                overflow: 'hidden', height: 'auto', borderRadius: "0 20px 20px 0"
              }}>
                <h2 className="accordion-header" style={{ borderRadius: "0 20px 20px 0" }}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <p id='first-layer' className='fs-5 fw-bold'>Adding Interactivity</p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='fw-light fs-5'>responding to events</p>
                    <p className='fw-light fs-5'>state: A components Memory</p>
                    <p className='fw-light fs-5'>Render and commit</p>
                    <p className='fw-light fs-5'>State as a snapshot</p>
                    <p className='fw-light fs-5'>Queueing a series of state updates</p>
                    <p className='fw-light fs-5'>Updating Objects in a state</p>
                    <p className='fw-light fs-5'>Updating Arrays in a state</p>
                  </div>
                </div>
              </div>
            </div>




            <div className="accordion mt-1" style={{ width: "100%", borderRadius: "0 20px 20px 0" }}
              id="accordionExample">
              <div className="accordion-item" style={{
                border: "none",
                overflow: 'hidden', height: 'auto', borderRadius: "0 20px 20px 0"
              }}>
                <h2 className="accordion-header" style={{ borderRadius: "0 20px 20px 0" }}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <p id='first-layer' className='fs-5 fw-bold'>Managing State</p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='fw-light fs-5'>Reacting to input with state</p>
                    <p className='fw-light fs-5'>Choosing the state structure</p>
                    <p className='fw-light fs-5'>Sharing State between components</p>
                    <p className='fw-light fs-5'>Preserving and resetting state</p>
                    <p className='fw-light fs-5'>Extracting state logic into a reducer</p>
                    <p className='fw-light fs-5'>Passing data deply with context</p>
                    <p className='fw-light fs-5'>Scalling up with reducer and context</p>
                  </div>
                </div>
              </div>
            </div>




            <div className="accordion mt-1" style={{ width: "100%", borderRadius: "0 20px 20px 0" }}
              id="accordionExample">
              <div className="accordion-item" style={{
                border: "none",
                overflow: 'hidden', height: 'auto', borderRadius: "0 20px 20px 0"
              }}>
                <h2 className="accordion-header" style={{ borderRadius: "0 20px 20px 0" }}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <p id='first-layer' className='fs-5 fw-bold'>Escape hatches</p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='fw-light fs-5'>Referencing values with refes</p>
                    <p className='fw-light fs-5'>Maniupulating dom with refs</p>
                    <p className='fw-light fs-5'>Syncronizing with effects</p>
                    <p className='fw-light fs-5'>You might not need an effect</p>
                    <p className='fw-light fs-5'>Lifecycle of Reactive effects</p>
                    <p className='fw-light fs-5'>Seperating events from effects</p>
                    <p className='fw-light fs-5'>Removing Effect dependencies</p>
                    <p className='fw-light fs-5'>Reusing logic with custom hooks</p>
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
            <p className='text-primary fs-6'>LEARN REACT &nbsp; <i className="fa-solid fa-caret-right"></i></p>

            <Outlet />

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
      <br />
      <br />
      <br />
    </div >


  )
}

export default Learn;
