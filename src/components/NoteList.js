import React from 'react';
// import style
import { getInitialData } from '../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData()
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler= this.onDeleteNoteHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title:title,
                body:body,
                archieved:false,
                createdAt:+new Date(),
              }
            ]
          }
        });
      }
      onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes: notes });
      }
    render() {
        return (
            <div>
                <AddNote addNote={this.onAddNoteHandler}/>
            <div className="row">
                {
                    this.state.notes.map((note) => (
                        <div key={note.id} className='col-md-3 p-2'>
                            <NoteItem onDelete={this.onDeleteNoteHandler} {...note}  />
                        </div>
                    ))
                }
            </div>
            </div>
        );
    }
}

export default NoteList;