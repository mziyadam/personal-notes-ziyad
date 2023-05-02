import { useParams } from 'react-router-dom';
import { getNote } from '../utils/network-data';
import React from 'react';
import { showFormattedDate } from "../utils";
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState(null);
  React.useEffect(() => {
    async function fetchNote() {
      const data = await getNote(id);
      setNote(data);
    }
    fetchNote();
  }, [id]);
  if (note !== null) {
    return (
      <section>
        <Card className="p-2 m-2">
          <Card.Body>
            <Card.Title>{note.data.title}</Card.Title>
            <Card.Subtitle>{showFormattedDate(note.data.createdAt)}</Card.Subtitle>
            <Card.Text>
              {note.data.body}
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    );

  }
  return <p>Note is not found!</p>;
}
DetailPage.propTypes = {
  id: PropTypes.string,
  fetchNote: PropTypes.func,
  note: PropTypes.object,
  setNote: PropTypes.func
};
export default DetailPage;