import React, { useEffect, useState } from 'react';
import '../styles/PlayerInfo.css';

const PlayerInfo = ({ match }) => {
  const [id, setId] = useState('');

  useEffect(() => {
    setId(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      <div className='row my-2'>
        <div className='col-lg-4 order-lg-1 text-center marginTop'>
          <img
            src='//placehold.it/150'
            className='mx-auto img-fluid img-circle d-block'
            alt='avatar'
          />
        </div>
        <div className='col-lg-8 order-lg-2 marginBottom25'>
          <div className='tab-content py-4'>
            <div className='tab-pane active' id='profile'>
              <h5 className='mb-3'>{id}'s Profile</h5>
              <div className='row'>
                <div className='col-md-6'>
                  <h6>Nickname:</h6>
                  <p>Dummy Nick name </p>
                  <h6>Team</h6>
                  <p>Dummy Team </p>
                  <h6>Date of Birth</h6>
                  <p>02/02/1990</p>
                  <h6>About</h6>
                  <p>Batsman/Bowler, </p>
                  <h6>Hobbies</h6>
                  <p>
                    Indie music, skiing and hiking. He love's the great
                    outdoors.
                  </p>
                </div>
                <div className='col-md-6'>
                  <h6>Recent Awards</h6>
                  <p className='badge badge-info badge-pill'>
                    Rajiv Gandjhi Khel Ratna
                  </p>
                  <p className='badge badge-info badge-pill'>
                    Sir Garfield Sober Trophy
                  </p>
                  <p className='badge badge-info badge-pill'>Padma Shri</p>
                  <p className='badge badge-info badge-pill'>
                    Wisden Cricketer of the year
                  </p>
                  <p className='badge badge-info badge-pill'>
                    ICC award for test player
                  </p>
                  <p className='badge badge-info badge-pill'>Arjuna Award</p>
                  <hr />
                  <span className='badge badge-primary'>
                    <i className='fa fa-user'></i> 200 Matches
                  </span>
                  <span className='badge badge-success'>
                    <i className='fa fa-cog'></i> 100 Wins
                  </span>
                  <span className='badge badge-danger'>
                    <i className='fa fa-eye'></i> 100 Loss
                  </span>
                </div>
                <div className='col-md-12'>
                  <h5 className='mt-2'>
                    <span className='fa fa-clock-o ion-clock float-right'></span>{' '}
                    Latest News
                  </h5>
                  <table className='table table-sm table-hover table-striped'>
                    <tbody>
                      <tr>
                        <td>
                          <strong>{id}</strong> joined some Team in{' '}
                          <strong>Collaboration</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>{id}</strong> takes part in{' '}
                          <strong>Discussions</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Uthappa</strong> asked {id} during{' '}
                          <strong>Discussions</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>John</strong> asked the board about{' '}
                          <strong>{id}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>{id}</strong> injured while practising for
                          <strong> World Cup</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
