import * as React from 'react';
import * as ReactDOM from 'react-dom';

const mount = document.createElement("div");

document.body.appendChild(mount);

const App = () => <div>Hello Paca</div>;

ReactDOM.render(<App />, mount);
