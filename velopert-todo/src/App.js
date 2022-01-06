import React from 'react';
import Todo from "./Todo";
import {Route, Routes, Link} from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";

function App() {
    return (
        <div>
            <ul>
                <li>
                  <Link to="/">홈</Link>
                </li>
                <li>
                  <Link to="/about">소개</Link>
                </li>
                <li>
                  <Link to="/todo">투두</Link>
                </li>
                                <li>
                  <Link to="/profiles">프로필목록</Link>
                </li>
              </ul>
              <hr/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/todo" element={<Todo/>}/>
                <Route path="/profiles/*" element={<Profiles/>} />
            </Routes>
        </div>
    );
}

export default App;
