import React from 'react';
import { createRoot } from 'react-dom/client';
// import style
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteList from './components/NoteList';

const root = createRoot(document.getElementById('root'));
root.render(
    <NoteList/>
);