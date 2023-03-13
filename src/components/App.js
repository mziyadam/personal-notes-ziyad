import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddNote from './AddNote';
import DetailPageWrapper from './DetailPage';
import NoteList from './NoteList';

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className='navbar-nav ms-2'>
            <li className='nav-item active'>
              <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/new">New</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/new" element={<AddNote />} />
          <Route path="/detail/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </>
  );
}
export default App;