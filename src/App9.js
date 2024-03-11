import React from 'react';
import Feeds from './Feeds';
import Post from './Post';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export default function App9() {
  return (
    <div>
        <BrowserRouter>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link>
        <Routes>
            <Route path="/" index element={<Feeds/>}></Route>
            <Route path="/post" index element={<Post/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
