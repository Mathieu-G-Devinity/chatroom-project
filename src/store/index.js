// j'importe la fonction createStore depuis la bibliothèque redux
import { createStore } from 'redux';
// j'importe la fonction qui va me permettre de brancher redux au debugger redux devtools
import { devToolsEnhancer } from 'redux-devtools-extension';

// j'importe le reducer
import reducer from 'src/reducer';

// on crée un nouveau store
// en transmettant à createStore le résultat de l'exécution de devToolsEnhancer
// je réalise le branchement à redux devtools
const store = createStore(reducer, devToolsEnhancer());

// on exporte le store afin qu'il soit utilisable par notre application
// le store sera le seul interlocuteur de notre application en ce qui concerne
// l'accès au state (aussi bien en lecture qu'en modification).
export default store;
