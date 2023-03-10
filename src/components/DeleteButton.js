import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function DeleteButton({ id, onDelete }) {
  return <Button variant="danger" className='note-item__delete' onClick={() => onDelete(id)}>Hapus</Button>
}
DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
export default DeleteButton;