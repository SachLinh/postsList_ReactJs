import './App.css';
import React from 'react'
import { Navbar } from './app/Navbar';
import {Routes, Route} from 'react-router-dom';
import {PostsList} from './features/posts/PostsList';
import {BrowserRouter as Router} from 'react-router-dom';
import { DetailPost } from './features/posts/DetailPost';
import { EditPost } from './features/posts/EditPost';
import { AddPost } from './features/posts/AddPost';

function App() {
  return (
    <div>
       <Router>
          <Navbar/>
          <div className="App">
              
              <Routes>
                <Route exact path="/" 
                element={
                  <div>
                    <AddPost/>
                    <PostsList/>
                  </div>
                }/>
                <Route path="/posts/:postId" element={<DetailPost/>} />
                <Route path="/editPost/:postId" element={<EditPost/>} />
              </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
