// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import
import './styles.css';

// -> Import des composants :
import Form from 'src/components/Form';
import Messages from 'src/components/Messages';


// == Composant
const App = () => {

const fakeMessages = [
  {
    message: 'Oulala les cookies c\'est trop bon !',
  },
  {
    message: 'J\'adoooooore le dev !',
  },
  {
    message: 'Vive le confinnement !',
  },
  {
    message: 'Tu sais que la France va gagner l\'Euro ? Mais chuuuut ! C\'est un secret...',
  }
];
console.log(fakeMessages);


return(
  <div className="app">
    <Messages datas = {fakeMessages}/>
    <Form/>
  </div>
)};



// == Export
export default App;
