import React from 'react'


const Blog = () => {
    return (
        <div className='container'>
            <div className="container  m-5">

                <p className='fs-5 fw-bolder' style={{ color: '#4FA3BE' }}>BLOG &nbsp; <i className="fa-solid fa-caret-right"></i></p>
                <p className="text-dark fs-1 fw-bold">React Blog</p>
                <p className="fs-3">This blog is the official source for the updates
                    from the React team. Anything important, including release notes
                    or deprecation notices, will be posted here first. You can also
                    follow the <span style={{ color: '#4FA3BE' }}>@reactjs</span> account on Twitter, but you won't
                    miss anything essential if you only read this blog.
                </p>

                <div className="container p-3 mt-5" style={{
                    border: '1px solid lightgray',
                    borderRadius: '16px'
                }}>
                    <p className='fs-2 fw-bold'>React Canaries: Incremental Feature Rollout Outside Meta</p>
                    <p className='fs-4 text-secondary'>may 3, 2023</p>
                    <p className='fs-5 text-secondary'> Traditionally, new React features
                        used to only be available at Meta first, and land in the open
                        source releases later. We'd like to offer the React
                        community an option to adopt individual new
                        features as soon as their design is close
                        to final—similar to how Meta uses React
                        internally. We are introducing a new
                        officially supported Canary release
                        channel. It lets curated setups
                        like frameworks decouple adoption
                        of individual React features
                        from the React release
                        schedule.
                    </p>
                </div>

                <div className="container p-3 mt-5" style={{
                    border: '1px solid lightgray',
                    borderRadius: '16px'
                }}>
                    <p className='fs-2 fw-bold'>React Labs: What We've Been Working On - March 2023
                    </p>
                    <p className='fs-4 text-secondary'>March 22, 2023</p>
                    <p className='fs-5 text-secondary'> In React Labs posts, we write about projects
                        in active research and development. Since our last update, we've made
                        significant progress on React Server Components, Asset Loading,
                        Optimizing Compiler, Offscreen Rendering, and Transition
                        Tracing, and we'd like to share what we learned.
                    </p>
                </div>



                <div className="container p-3 mt-5" style={{
                    border: '1px solid lightgray',
                    borderRadius: '16px'
                }}>
                    <p className='fs-2 fw-bold'>Introducing react.dev </p>
                    <p className='fs-4 text-secondary'>March 16, 2023</p>
                    <p className='fs-5 text-secondary'>Today we are thrilled to launch react.dev,
                        the new home for React and its documentation.
                        In this post, we would like to give you a
                        tour of the new site.
                    </p>
                </div>


                <div className="container p-3 mt-5" style={{
                    border: '1px solid lightgray',
                    borderRadius: '16px'
                }}>
                    <p className='fs-2 fw-bold'>React Labs: What We've Been Working On - June 2022
                    </p>
                    <p className='fs-4 text-secondary'>June 15, 2022</p>
                    <p className='fs-5 text-secondary'>React 18 was years in the making, and with
                        it brought valuable lessons for the React team. Its release was the result
                        of many years of research and exploring many paths. Some of those paths
                        were successful; many more were dead-ends that led to new insights.
                        One lesson we've learned is that it's frustrating for the
                        community to wait for new features without having insight
                        into these paths that we're exploring…
                    </p>
                </div>


                <div className="container p-3 mt-5" style={{
                    border: '1px solid lightgray',
                    borderRadius: '16px'
                }}>
                    <p className='fs-2 fw-bold'>React v18.0
                    </p>
                    <p className='fs-4 text-secondary'>March 29, 2022</p>
                    <p className='fs-5 text-secondary'>React 18 is now available on npm!
                        In our last post, we shared step-by-step instructions for
                        upgrading your app to React 18. In this post, we'll
                        give an overview of what's new in React 18, and
                        what it means for the future…
                    </p>
                </div>


                <div className="container p-3 mt-5" style={{
                    border: '1px solid lightgray',
                    borderRadius: '16px'
                }}>
                    <p className='fs-2 fw-bold'>How to Upgrade to React 18
                    </p>
                    <p className='fs-4 text-secondary'>March 8, 2022</p>
                    <p className='fs-5 text-secondary'>As we shared in the release post, React
                        18 introduces features powered by our new concurrent renderer,
                        with a gradual adoption strategy for existing applications.
                        In this post, we will guide you through the steps for
                        upgrading to React 18…
                    </p>
                </div>


                <div className="container p-3 mt-5" style={{
                    border: '1px solid lightgray',
                    borderRadius: '16px'
                }}>
                    <p className='fs-2 fw-bold'>React Conf 2021 Recap
                    </p>
                    <p className='fs-4 text-secondary'>December 17, 2021</p>
                    <p className='fs-5 text-secondary'>Last week we hosted our 6th React Conf.  In
                        previous years, we've used the React Conf stage to deliver industry
                        changing announcements such as React Native and React Hooks.
                        This year, we shared our multi-platform vision for React,
                        starting with the release of React 18 and gradual adoption
                        of concurrent features…
                    </p>
                </div>


                <div className="container p-3 mt-5" style={{
                    border: '1px solid lightgray',
                    borderRadius: '16px'
                }}>
                    <p className='fs-2 fw-bold'>The Plan for React 18
                    </p>
                    <p className='fs-4 text-secondary'>June 8, 2021</p>
                    <p className='fs-5 text-secondary'>
                        The React team is excited to share a few updates:
                        <ul className='mt-3'>
                            <li className='m-3'>We've started work on the React 18 release, which will be our next major version.
                            </li>
                            <li className='m-3'>We've created a Working Group to prepare the community for gradual adoption of new features in React 18.
                            </li>
                            <li className='m-3'>We've published a React 18 Alpha so that library authors can try it and provide feedback…
                            </li>
                        </ul>
                    </p>
                </div>


                <div className="container p-3 mt-5" style={{
                    border: '1px solid lightgray',
                    borderRadius: '16px'
                }}>
                    <p className='fs-2 fw-bold'>Introducing Zero-Bundle-Size React Server Components

                    </p>
                    <p className='fs-4 text-secondary'>December 21, 2020</p>
                    <p className='fs-5 text-secondary'>2020 has been a long year. As it comes to
                        an end we wanted to share a special Holiday Update on our research
                        into zero-bundle-size React Server Components. To introduce
                        React Server Components, we have prepared a talk and a demo.
                        If you want, you can check them out during the holidays,
                        or later when work picks back up in the new year…
                    </p>
                </div>

                <hr />
                <div className="container p-3">
                    <p className="fs-2 fw-bold">All release notes</p>
                    <p className="fs-5">
                        Not every React release deserves its own blog post, but you can find a
                        detailed changelog for every release in the CHANGELOG.md file in the
                        React repository, as well as on the <span style={{ color: '#4FA3BE' }}>Releases</span> page.
                    </p>
                </div>
                <hr />

                <p className="fs-2 fw-bold">Older posts</p>
                <p className="fs-5">see the <span style={{ color: '#4FA3BE' }}>older posts</span></p>


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
        </div>
    )
}

export default Blog;
