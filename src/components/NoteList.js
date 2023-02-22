import React from 'react';
// import style
import { getInitialData } from '../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteItem from './NoteItem';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData()
        }
    }
    render() {
        return (
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
    }
}

export default NoteList;