import React from 'react';
import './UserForm.css';
import { Link } from 'react-router-dom';

export const UserTile = () => {
    let data = JSON.parse(localStorage.getItem('Details'));

    return (
            <div>
                <div style={{fontSize: '34px', fontWeight: '500'}}>
                    EMPLOYEE FEEDBACK DATA
                </div>
                <div className='wrapper'>

                    <div className="tile-section">
                        {data.reverse().map((data, i) =>
                            <div className='tile' key={i}>
                                <span>Name: {data.name}</span>
                                <span>Department: {data.department}</span>
                                <span>Rating: {data.rating}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            </div>
    )
}
