import React, { useEffect, useState } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import '../styles/Winner.css';

const Winner = ({ match }) => {
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState('');

  useEffect(() => {
    setId(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='horizontalFlex '>
      <Jumbotron fluid>
        <Container>
          <h1>Team1 Won</h1>
          <p>This team won by 35 runs.</p>
        </Container>
      </Jumbotron>
      <div className='dataMatch'>
        <h2>Team Winner Details:</h2>
        <h6>Match:</h6>
        <p>Team 1 VS Team 2</p>
        <h6>Venue:</h6>
        <p>Some place</p>
        <h6>Date:</h6>
        <p>12/05/2020</p>
        <h6>Score</h6>
        <p>235/9</p>
        <h6>Summary:</h6>
        <p>
          Magna reprehenderit officia magna veniam amet sunt. Do voluptate
          tempor cillum laboris. Do excepteur ea cupidatat do voluptate aliqua
          anim esse. Laboris velit laboris consectetur ut labore cillum minim
          cupidatat proident in proident fugiat deserunt nisi. Commodo quis
          culpa incididunt elit incididunt in ad magna occaecat anim ullamco
          anim. Ex fugiat do fugiat occaecat aliquip ullamco voluptate cupidatat
          pariatur sit laborum nisi. Adipisicing non magna qui laboris sit
          dolore. Anim ad cupidatat deserunt eu ullamco fugiat eu fugiat aliquip
          sint duis quis ea minim. Ut mollit dolor ullamco cillum enim ad
          officia veniam deserunt ea nostrud commodo. Nisi ullamco cillum
          incididunt cillum. Incididunt amet et consectetur qui cupidatat magna
          sint.
        </p>
      </div>
    </div>
  );
};

export default Winner;
