import React from "react";
import { showFormattedDate } from "../utils";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteButton from "./DeleteButton";
import PropTypes from 'prop-types';
function NoteItem({ id, title, body, createdAt, onDelete }) {
    return (
        <Card className="p-2 m-2">
            <Card.Body>
                <Card.Title><Link to={`/detail/${id}`}>{title}</Link></Card.Title>
                <Card.Subtitle>{showFormattedDate(createdAt)}</Card.Subtitle>
                <Card.Text>
                    {body}
                </Card.Text>
                <div className="row">
                    <DeleteButton id={id} onDelete={onDelete}></DeleteButton></div>
            </Card.Body>
        </Card>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};
export default NoteItem;