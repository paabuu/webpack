import * as React from 'react';

const App: React.SFC<{message: string}> = ({message }) => (
    <div className="message">{message}</div>
);

export default App;