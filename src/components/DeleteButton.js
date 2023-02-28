import React from 'react';
import { Button } from 'react-bootstrap';
 
function DeleteButton({ id, onDelete }) {
  return <Button variant="danger"className='note-item__delete' onClick={() => onDelete(id)}>Hapus</Button>
}
 
export default DeleteButton;