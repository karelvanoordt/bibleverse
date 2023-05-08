import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

function RandomVerse() {
  const [verse, setVerse] = useState('');

  useEffect(() => {
    axios.get('https://labs.bible.org/api/?passage=random')
      .then(response => {
        setVerse(response.data[0].text);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Text>{verse}</Card.Text>
        <Button variant="primary" onClick={() => window.location.reload()}>
          <FontAwesomeIcon icon={faSyncAlt} /> Get another verse
        </Button>
      </Card.Body>
    </Card>
  );
}

export default RandomVerse;
