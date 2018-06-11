import * as React from 'react';
import { createStore } from 'redux';
import { enthusiasm } from './reducer/index';
import { Provider } from 'react-redux';

import Hello from './components/Hello';

const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'Typescript'
})

class App extends React.Component {
  public render() {
    return (
        <Provider store={store}>
          <Hello />
        </Provider>
    );
  }
}

export default App;
