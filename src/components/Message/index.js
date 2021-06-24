// == Import npm
import React from 'react';
import PropTypes from 'prop-types';


// == Composant
const Message = ({message}) => (
  
  <li>Moi: {message}</li>
   
);


Message.propTypes = {
message: PropTypes.string.isRequired,
};

// == Export
export default Message;
