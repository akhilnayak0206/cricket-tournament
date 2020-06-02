import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Accordion, Card, ListGroup } from 'react-bootstrap';
import '../styles/Home.css';

const Home = ({ history }) => {
  // eslint-disable-next-line no-unused-vars
  const [menIndia, setMenIndia] = useState([
    'Virat Kohli',
    'Rohit Sharma',
    'Hardik Pandya',
    'K. L. Rahul',
    'Rishabh Pant',
  ]);
  // eslint-disable-next-line no-unused-vars
  const [womenIndia, setWomenIndia] = useState([
    'Mithali Raj',
    'Harmanpreet Kaur',
    'Veda Krishnamurthy',
    'Smriti Mandhana',
    'Mona Meshram',
  ]);
  // eslint-disable-next-line no-unused-vars
  const [womenAus, setWomenAus] = useState([
    'Nicole Bolton',
    'Meg Lanning',
    'Beth Mooney',
    'Nicola Carey',
    'Ashleigh Gardner',
  ]);

  const playerInfo = (name) => {
    history.push(`/player-info/${name}`);
  };

  return (
    <div className='horizontalFlex'>
      <h2>Team's that are Participating in 2020</h2>
      <Accordion style={{ width: '100%' }}>
        <Card>
          <Accordion.Toggle as={Card.Header} variant='link' eventKey='0'>
            Team Men's India
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <ListGroup>
                {menIndia &&
                  menIndia.map((name, key) => (
                    <ListGroup.Item key={key} onClick={() => playerInfo(name)}>
                      {name}
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant='link' eventKey='1'>
            Team Women's India
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>
              <ListGroup>
                {womenIndia &&
                  womenIndia.map((name, key) => (
                    <ListGroup.Item key={key} onClick={() => playerInfo(name)}>
                      {name}
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant='link' eventKey='2'>
            Team Women's Australia
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='2'>
            <Card.Body>
              <ListGroup>
                {womenAus &&
                  womenAus.map((name, key) => (
                    <ListGroup.Item key={key} onClick={() => playerInfo(name)}>
                      {name}
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default withRouter(Home);
