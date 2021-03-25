import React, {useState, useEffect} from 'react';

const EditForm = (props) => {
  const [isShown, setisShown] = useState(true);
  const [avatar, setAvatar] = useState(props.userDetails.avatar);
  const [name, setName] = useState(props.userDetails.name);
  const [address, setAddress] = useState(props.userDetails.address);
  const [company, setCompany] = useState(props.userDetails.company);
  const [email, setEmail] = useState(props.userDetails.email);
  const [id, setId] = useState(props.userDetails._id);

  const editForm = (e) => {
    e.preventDefault();
    const editdetails = {
      avatar,
      name,
      email,
      address,
      company,
      id,
    };
    props.editForm(editdetails);
  };
  return (
    <div>
      <div className='row search'>
        <div className='col-xs-12'>
          <h4>Edit Fields</h4>
          <div style={{marginTop: '20px', marginBottom: '20px'}}>
            <form onSubmit={editForm}>
              <input
                name='avatar'
                type='text'
                value={avatar}
                onChange={(event) => setAvatar(event.target.value)}
                required
              />
              <input
                name='name'
                type='text'
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
              />
              <input
                name='email'
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <input
                name='company'
                type='text'
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                required
              />
              <input
                name='address'
                type='text'
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />
              <button class='btn-custom update' type='submit'>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditForm;
