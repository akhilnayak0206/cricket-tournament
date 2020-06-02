import React from 'react';
import { withRouter } from 'react-router-dom';
import { Accordion, Card } from 'react-bootstrap';
import '../styles/Matches.css';

const Matches = ({ history }) => {
  const matchInfo = (id) => {
    history.push(`/match-info/${id}`);
  };

  return (
    <div className='horizontalFlex'>
      <h2>Matches that are in 2020</h2>
      <Accordion style={{ width: '100%' }}>
        <Card>
          <Accordion.Toggle as={Card.Header} variant='link' eventKey='0'>
            Men's IN VS Women's AUS
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body onClick={() => matchInfo('randomID1')}>
              Something about the matches. Consequat ullamco aliquip dolore elit
              enim aute ut ullamco qui irure mollit amet quis. Ipsum incididunt
              enim labore cillum ullamco nulla. Dolor esse nisi ad enim mollit.
              Et adipisicing velit amet adipisicing nulla dolore deserunt
              commodo labore mollit tempor. Adipisicing ipsum duis duis dolor
              laboris magna do sunt occaecat fugiat fugiat dolore id. Cupidatat
              laboris consequat proident mollit deserunt Lorem consectetur sit
              tempor laboris. Dolor nostrud laborum fugiat cillum. Aliqua sint
              reprehenderit consequat ipsum eu eu ipsum enim. Officia do minim
              minim cupidatat. Enim consectetur aliqua anim consequat magna non
              mollit commodo esse est do fugiat. Excepteur cupidatat duis enim
              anim amet eu nostrud pariatur reprehenderit. Nulla cupidatat ipsum
              est consectetur cupidatat anim duis reprehenderit officia aliqua.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant='link' eventKey='1'>
            Women's IN VS Women's AUS
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1'>
            <Card.Body onClick={() => matchInfo('randomID2')}>
              Something about the matches. Consequat ullamco aliquip dolore elit
              enim aute ut ullamco qui irure mollit amet quis. Ipsum incididunt
              enim labore cillum ullamco nulla. Dolor esse nisi ad enim mollit.
              Et adipisicing velit amet adipisicing nulla dolore deserunt
              commodo labore mollit tempor. Adipisicing ipsum duis duis dolor
              laboris magna do sunt occaecat fugiat fugiat dolore id. Cupidatat
              laboris consequat proident mollit deserunt Lorem consectetur sit
              tempor laboris. Dolor nostrud laborum fugiat cillum. Aliqua sint
              reprehenderit consequat ipsum eu eu ipsum enim. Officia do minim
              minim cupidatat. Enim consectetur aliqua anim consequat magna non
              mollit commodo esse est do fugiat. Excepteur cupidatat duis enim
              anim amet eu nostrud pariatur reprehenderit. Nulla cupidatat ipsum
              est consectetur cupidatat anim duis reprehenderit officia aliqua.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant='link' eventKey='2'>
            U-19 IN VS U-19 AUS
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='2'>
            <Card.Body onClick={() => matchInfo('randomID3')}>
              Something about the matches. Consequat ullamco aliquip dolore elit
              enim aute ut ullamco qui irure mollit amet quis. Ipsum incididunt
              enim labore cillum ullamco nulla. Dolor esse nisi ad enim mollit.
              Et adipisicing velit amet adipisicing nulla dolore deserunt
              commodo labore mollit tempor. Adipisicing ipsum duis duis dolor
              laboris magna do sunt occaecat fugiat fugiat dolore id. Cupidatat
              laboris consequat proident mollit deserunt Lorem consectetur sit
              tempor laboris. Dolor nostrud laborum fugiat cillum. Aliqua sint
              reprehenderit consequat ipsum eu eu ipsum enim. Officia do minim
              minim cupidatat. Enim consectetur aliqua anim consequat magna non
              mollit commodo esse est do fugiat. Excepteur cupidatat duis enim
              anim amet eu nostrud pariatur reprehenderit. Nulla cupidatat ipsum
              est consectetur cupidatat anim duis reprehenderit officia aliqua.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default withRouter(Matches);
