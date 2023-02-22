import React from 'react';
import { createRoot } from 'react-dom/client';
// import style
import './styles/style.css';
import { getInitialData } from './utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteItem from './components/NoteItem';

const root = createRoot(document.getElementById('root'));
root.render(
    <div className="row">
        {
            getInitialData().map((note) => (
                <div className='col-md-3 p-2'>
                    <NoteItem key={note.id} {...note} />
                </div>
            ))
        }
    </div>
);