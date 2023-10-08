import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Learn from './components/Learn';
import Reference from './components/Reference';
import Menu from './Navbar';
import './App.css'
import './index'
import Home from './components/Home';
import Community from './components/Community';
import Blog from './components/Blog';
import MainLearn from './sidebarComponents/LearnComponents/MainLearn';
import Thinking from './sidebarComponents/LearnComponents/Thinking';
import Tictac from './sidebarComponents/LearnComponents/Tictac';
import Installation from './sidebarComponents/LearnComponents/Installation';
import StartingNewProject from './sidebarComponents/LearnComponents/StartingNewProject';
import AddReact from './sidebarComponents/LearnComponents/AddReact';

const App = () => {
  return (
    <div>
      <div className="container-fuid fw-semibold p-1 text-center fs-4"
        style={{ color: "gray", backgroundColor: "#F3F4F6" }} id='clamp'>
        <div>
          <p>  Support Ukrain <sub></sub> <span style={{ color: "rgb(8,126,164)" }}>Help Provide Humanitarian Aid to Ukraine.</span>
          </p>


        </div>
      </div>
      <div>
        <Menu />
      </div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/reference' Component={Reference} />
        <Route path='/community' Component={Community} />
        <Route path='/blog' Component={Blog} />

        <Route path='/learn' Component={Learn}>
          <Route path='/learn' Component={MainLearn} />
          <Route path='thinking' Component={Thinking} />
          <Route path='tictac' Component={Tictac}></Route>
          <Route path='installation' Component={Installation}></Route>
          <Route path='starting' Component={StartingNewProject}></Route>
          <Route path='addreact' Component={AddReact}></Route>

        </Route>

      </Routes>
      {/* <About/>      
    <Contact/>       */}

    </div>
  )
}

export default App
