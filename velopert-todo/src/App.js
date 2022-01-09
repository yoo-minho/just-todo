import React from 'react';
import Todo from "./Todo";
import {Link, Route, Routes} from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import PostListContainer from "./containers/PostListContainer";

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
               <li>
                  <Link to="/counter">카운터</Link>
                </li>
                <li>
                  <Link to="/todos">리덕스투두</Link>
                </li>
                <li>
                  <Link to="/posts">리덕스포스트</Link>
                </li>
              </ul>
              <hr/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/todo" element={<Todo/>}/>
                <Route path="/profiles/*" element={<Profiles/>}/>
                <Route path="/counter" element={<CounterContainer/>}/>
                <Route path="/todos" element={
                    <div>
                        <CounterContainer/>
                        <hr/>
                        <TodosContainer/>
                    </div>
                }/>
                <Route path="/posts/*" element={<PostListContainer/>}/>
            </Routes>
            </div>
    );
}

export default App;
