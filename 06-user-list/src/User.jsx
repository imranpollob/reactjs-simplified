/* eslint-disable react/prop-types */
export const User = ({ name, username, email, website, address }) => {
  return (
    <div className="user">
      <div className="user-header">
        <h2>{name}</h2>
        <p>( {username} )</p>
      </div>
      <div className="user-details">
        <p>{website}</p>
        <p>{email}</p>
        <p>{address.city}</p>
      </div>
    </div>
  );
};
