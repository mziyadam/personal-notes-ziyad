import React from "react";
import { showFormattedDate } from "../utils";
import { Card, Button } from 'react-bootstrap';

function NoteItem({ title, body, createdAt }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{showFormattedDate(createdAt)}</Card.Subtitle>
                <Card.Text>
                    {body}
                </Card.Text>
                <div className="row">
                    <div className="col-md-6">
                        <Button variant="danger">Go somewhere</Button></div>
                    <div className="col-md-6">
                        <Button variant="info">Go somewhere</Button></div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default NoteItem;