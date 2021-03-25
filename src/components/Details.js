import React from 'react';

const Details = (props) => (
  <div className='col-xs-12 col-md-6 right'>
    <div className='jumbotron'>
      <div className='text-center'>
        {console.log(props.userDetails)}
        <div className='avatar'>{props.userDetails.avatar}</div>
        <h4>{props.userDetails.name}</h4>
        <span>{props.userDetails.company}</span>
      </div>
      <ul className='details'>
        <li>
          <span>Full Name:</span> <span>{props.userDetails.name}</span>
        </li>
        <li>
          <span>Email:</span> <span>{props.userDetails.email}</span>
        </li>
        <li>
          <span>Phone:</span> <span>{props.userDetails.phone}</span>
        </li>
        <li>
          <span>Company:</span> <span>{props.userDetails.company}</span>
        </li>
        <li>
          <span>Address:</span> <span>{props.userDetails.address}</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Details;
