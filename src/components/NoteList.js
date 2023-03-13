import React from 'react';
// import style
import { deleteNote, getInitialData } from '../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteItem from './NoteItem';
class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData()
        }
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        deleteNote(id);
        this.setState({ notes: getInitialData() });
    }
    render() {
        if (this.state.notes.length > 0) {
            return (
                <div>
                    <div className="row">
                        {
                            this.state.notes.map((note) => (
                                <div key={note.id} className='col-md-3 p-2'>
                                    <NoteItem onDelete={this.onDeleteNoteHandler} {...note} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            );

        } else {
            return (
                <div>
                    <h1 className='text-center'>Tidak ada catatan</h1>
                </div>
            );
        }
    }
}
export default NoteList;