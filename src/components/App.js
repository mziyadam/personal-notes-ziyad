import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailPageWrapper from './DetailPage';
import NoteList from './NoteList';
 
function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/detail/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </>
  );
}
export default App;