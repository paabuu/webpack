import * as React from 'react';

import Hello from './components/Hello';

class App extends React.Component {
  public render() {
    return (
        <Hello name="xixi" enthusiasmLevel={100} />
    );
  }
}

export default App;
