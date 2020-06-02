import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import '../styles/Points.css';

const Points = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([
    { rank: 1, team: `India`, matches: 45, points: '5211', rating: 116 },
    { rank: 2, team: `New Zealand`, matches: 44, points: '5211', rating: 111 },
    { rank: 3, team: `Australia`, matches: 42, points: '5211', rating: 108 },
    { rank: 4, team: `England`, matches: 40, points: '5211', rating: 105 },
  ]);

  return (
    <div className='horizontalFlex'>
      <h2>Point's Table of 2020</h2>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Points</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((obj, key) => (
              <tr>
                <td>{obj.rank}</td>
                <td>{obj.team}</td>
                <td>{obj.matches}</td>
                <td>{obj.points}</td>
                <td>{obj.rating}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Points;
