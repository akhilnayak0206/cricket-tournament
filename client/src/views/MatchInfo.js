import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import '../styles/MatchInfo.css';

const MatchInfo = ({ match, history }) => {
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
        <h6>Match:</h6>
        <p>Team 1 VS Team 2</p>
        <h6>Outcome:</h6>
        <p>Team 1 Won</p>
        <h6>Venue:</h6>
        <p>Some place</p>
        <h6>Date:</h6>
        <p>12/05/2020</p>
        <h6>Score Team1:</h6>
        <p>235/9</p>
        <h6>Score Team2:</h6>
        <p>200/4</p>
        <Button onClick={() => history.push(`/winner-details/${id}`)}>
          Winner's Info
        </Button>
      </div>
    </div>
  );
};

export default withRouter(MatchInfo);
