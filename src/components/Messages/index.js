// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';

// == Composant
const Messages = ({datas}) => (
  <div>
      <ul>
      {datas.map(
              (element) => <Message key = {element.message} message = {element.message} />,
            )}
      </ul>
  </div>  
);


Messages.propTypes = {
  // on veut un tableau de ...
datas: PropTypes.arrayOf(
  // ... quelques chose qui a une certaine forme
  PropTypes.shape(
    // un objet
    {
      message: PropTypes.string.isRequired,
    },
  ),
).isRequired,
};

// == Export
export default Messages;
