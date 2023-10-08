import React from 'react'

const Reference = () => {

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
              <p className='fs-6'>REACT@18.2.0</p>

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
                      <p id='first-layer' className='fs-5 fw-bold'>Hooks</p>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p className='fw-light fs-5'>use <i className="fa-solid fa-flask"></i></p>
                      <p className='fw-light fs-5'>useCallback</p>
                      <p className='fw-light fs-5'>useContext</p>
                      <p className='fw-light fs-5'>useDebugValue</p>
                      <p className='fw-light fs-5'>useDeferredValue</p>
                      <p className='fw-light fs-5'>useEffect</p>
                      <p className='fw-light fs-5'>useId</p>
                      <p className='fw-light fs-5'>useImperativeHandl</p>
                      <p className='fw-light fs-5'>useInsertionEffect</p>
                      <p className='fw-light fs-5'>useLayoutEffect</p>
                      <p className='fw-light fs-5'>useMemo</p>
                      <p className='fw-light fs-5'>useReducer</p>
                      <p className='fw-light fs-5'>useState</p>
                      <p className='fw-light fs-5'>useSyncExternalStore</p>
                      <p className='fw-light fs-5'>useTransition</p>
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
                    <p id='first-layer' className='fs-5 fw-bold'>APIs</p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='fw-light fs-5'></p>
                    <p className='fw-light fs-5'>cache<i className="fa-solid fa-flask"></i></p>
                    <p className='fw-light fs-5'>createContext</p>
                    <p className='fw-light fs-5'>forwardRef</p>
                    <p className='fw-light fs-5'>lazy</p>
                    <p className='fw-light fs-5'>memo</p>
                    <p className='fw-light fs-5'>startTransition</p>
                  </div>
                </div>
              </div>
            </div>




            <br />
            <hr />


            <div className="accordion" style={{ width: "100%", borderRadius: "0 20px 20px 0" }}
              id="accordionExample">
              <div className="accordion-item" style={{
                border: "none",
                overflow: 'hidden', height: 'auto', borderRadius: "0 20px 20px 0"
              }}>
                <h2 className="accordion-header" style={{ borderRadius: "0 20px 20px 0" }}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <p id='first-layer' className='fs-5 fw-bold'>Directive <i className="fa-solid fa-flask"></i></p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='fw-light fs-5'>'use client'<i className="fa-solid fa-flask"></i></p>
                    <p className='fw-light fs-5'>'use server' <i className="fa-solid fa-flask"></i></p>
                  </div>
                </div>
              </div>
            </div>



            <p className='fs-5'>react-dom@18.2.0</p>
            <div className="accordion mt-1" style={{ width: "100%", borderRadius: "0 20px 20px 0" }}
              id="accordionExample">
              <div className="accordion-item" style={{
                border: "none",
                overflow: 'hidden', height: 'auto', borderRadius: "0 20px 20px 0"
              }}>
                <h2 className="accordion-header" style={{ borderRadius: "0 20px 20px 0" }}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <p id='first-layer' className='fs-5 fw-bold'>APIs</p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='fw-light fs-5'>createPortal</p>
                    <p className='fw-light fs-5'>flushSync</p>
                    <p className='fw-light fs-5'>FindDOMNode</p>
                    <p className='fw-light fs-5'>hydrate</p>
                    <p className='fw-light fs-5'>render</p>
                    <p className='fw-light fs-5'>render</p>
                    <p className='fw-light fs-5'>UnmountComponentAtNode</p>
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
                    <p id='first-layer' className='fs-5 fw-bold'>Client APIs</p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='fw-light fs-5'>createRoot</p>
                    <p className='fw-light fs-5'>hydrateRoot</p>
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
                    <p id='first-layer' className='fs-5 fw-bold'>server APIs</p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='fw-light fs-5'>renderToNodeStream</p>
                    <p className='fw-light fs-5'>renderToPipeableStream</p>
                    <p className='fw-light fs-5'>renderToReadableStream</p>
                    <p className='fw-light fs-5'>renderToStaticMarkup</p>
                    <p className='fw-light fs-5'>renderToStaticNodeStream</p>
                    <p className='fw-light fs-5'>renderToString</p>
                    <hr />
                    <p className='fw-light fs-5'>lagacy APIs</p>
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
                    <p id='first-layer' className='fs-5 fw-bold'>Lagacy APIs</p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='fw-light fs-5'>Children</p>
                    <p className='fw-light fs-5'>cloneElement</p>
                    <p className='fw-light fs-5'>Component</p>
                    <p className='fw-light fs-5'>Component</p>
                    <p className='fw-light fs-5'>createElement</p>
                    <p className='fw-light fs-5'>createFactory</p>
                    <p className='fw-light fs-5'>createRef</p>
                    <p className='fw-light fs-5'>isVAlidElement</p>
                    <p className='fw-light fs-5'>PurseComponent</p>
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

          <br />
          <br />
          <br />

          {/* -------------------X---------------Column-1--------------------X-------------------------------------- */}

          {/* -----------------------------------Column-2----------------------------------------------------------- */}

          <div className="col-md-8 col-lg-8 col-sm-12 overflow-auto"
            style={{ height: '100vh' }}>
            <p className='text-primary fs-6'>API REFERENCE &nbsp; <i className="fa-solid fa-caret-right"></i></p>
            <p className="fs-1 text-dark">Built-in React Hooks</p>
            <p className="fs-4 text-dark">Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.
              This page lists all built-in Hooks in React.</p>
            <hr />

            <p className="fs-1 text-dark">State Hooks</p>
            <p className='fs-5 text-dark'>State lets a component <span style={{ color: '#4FA3BE' }}>“remember” information like user input.</span>
              For example, a form component can use state to store the input value,
              while an image gallery component can use state to store the selected image index.</p>
            <br />
            <p className="fs-4 text-dark">To add state to a component, use one of these Hooks:</p>
            <ul>
              <li className='text-dark'><span style={{ color: '#4FA3BE' }}>useState</span>
                declares a state variable that you can update directly.</li>

              <li className='text-dark'><span style={{ color: '#4FA3BE' }}>useReducer</span> declares a state variable with the update
                logic inside a <span style={{ color: '#4FA3BE' }}>reducer function.</span></li>
            </ul>

            <p className="fs-1 text-dark">Context Hooks</p>
            <p className="fs-5 text-dark">Context lets a component <span style={{ color: '#4FA3BE' }}>receive information from distant
              parents without passing it as props.</span> For example, your app's
              top-level component can pass the current UI theme to all components below,
              no matter how deep.
            </p>
            <ul>
              <li className='text-dark'><span style={{ color: '#4FA3BE' }}>useContext </span>
                reads and subscribe to context.</li>
            </ul>

            <p className="fs-1 text-dark">Ref Hooks</p>
            <p className="fs-5 text-dark">Refs let a component <span style={{ color: '#4FA3BE' }}>hold some
              information that isn't used for rendering</span>
              , like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm.
              They are useful when you need to work with non-React systems,
              such as the built-in browser APIs.</p>

            <ul>
              <li className='text-dark'><span style={{ color: '#4FA3BE' }}>useRef </span>
                declares a state variable that you can update directly.</li>

              <li className='fs-5 text-dark'><span style={{ color: '#4FA3BE' }}>useImperativeHandle </span>
                lets you customize the ref exposed by your component. This is rarely used.
              </li>
            </ul>

            <p className="fs-1 text-dark">effect Hooks</p>
            <p className="fs-5 text-dark">Effects let a component <span style={{ color: '#4FA3BE' }}>connect to and synchronize with
              external systems.</span> This includes dealing with
              network, browser DOM, animations, widgets written using a different UI library,
              and other non-React code.
            </p>

            <ul>
              <li className='text-dark'><span style={{ color: '#4FA3BE' }}>useEffect </span>
                Connects a component to an external system.</li>
            </ul>
            <p className="fs-5 text-dark">Effects are an “escape hatch” from the React paradigm. Don't
              use Effects to orchestrate the data flow of your application. If you're not
              interacting with an external system, you might not need an Effect.</p>

            <p className='fs-5 text-dark'>There are two rarely used variations of useEffect with differences in timing:</p>

            <ul>
              <li className='text-dark'><span style={{ color: '#4FA3BE' }}>useInsertionEffect </span>
                fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.</li>

              <li className='fs-5 text-dark'><span style={{ color: '#4FA3BE' }}>useImperativeHandle </span>
                lets you customize the ref exposed by your component. This is rarely used.
              </li>
            </ul>


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

export default Reference;
