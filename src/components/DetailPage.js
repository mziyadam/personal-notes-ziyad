import { useParams } from 'react-router-dom';
import {getNote } from '../utils';
import React from 'react';
import { showFormattedDate } from "../utils";
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={id} />;
}
class DetailPage extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        note: getNote(props.id)
      };
    }
   
    render() {
      if (this.state.note === null) {
        return <p>Note is not found!</p>;
      }
      return (
        <section>
            <Card className="p-2 m-2">
            <Card.Body>
                <Card.Title>{this.state.note.title}</Card.Title>
                <Card.Subtitle>{showFormattedDate(this.state.note.createdAt)}</Card.Subtitle>
                <Card.Text>
                    {this.state.note.body}
                </Card.Text>
            </Card.Body>
        </Card>
        </section>
      );
    }
  }
  DetailPage.propTypes = {
    note: PropTypes.object
  };
  DetailPageWrapper.propTypes = {
    id: PropTypes.string
  };
  export default DetailPageWrapper;