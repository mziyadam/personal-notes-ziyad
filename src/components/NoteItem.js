import React from "react";
import { showFormattedDate } from "../utils";
import { Card } from 'react-bootstrap';
import DeleteButton from "./DeleteButton";

function NoteItem({ id, title, body, createdAt, onDelete }) {
    return (
        <Card className="p-2 m-2">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{showFormattedDate(createdAt)}</Card.Subtitle>
                <Card.Text>
                    {body}
                </Card.Text>
                <div className="row">
                        <DeleteButton id={id} onDelete={onDelete}></DeleteButton></div>
                    {/* <div className="col-md-6">
                        <Button variant="info">Go somewhere</Button></div> */}
                
            </Card.Body>
        </Card>
    );
}

export default NoteItem;