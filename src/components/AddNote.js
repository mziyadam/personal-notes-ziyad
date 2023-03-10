import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AddNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }
    render() {
        return (
            <form className='add-note' onSubmit={this.onSubmitEventHandler}>
                <div className='ps-4 pe-4'>

                    <div className="input-group input-group-sm m-3">
                        <span className="input-group-text">Title</span>
                        <input className="form-control" type="text" placeholder="Enter title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    </div>

                    <div className="input-group input-group-sm m-3">
                        <span className="input-group-text">Body</span>
                        <input className="form-control" type="text" placeholder="Enter Body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    </div>
                    <div className='text-center'>
                        <Button type="submit" variant='secondary'>Tambah</Button>
                    </div>
                </div>
            </form>
        )
    }
}

AddNote.propTypes = {
    onTitleChangeEventHandler: PropTypes.func,
    onBodyChangeEventHandler: PropTypes.func,
    onSubmitEventHandler: PropTypes.func
};
export default AddNote;