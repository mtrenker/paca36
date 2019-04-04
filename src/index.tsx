import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './redux/store';
import { ConnectedGallery } from './containers/Gallery';

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const mount = document.createElement("div");
document.body.appendChild(mount);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedGallery />
  </Provider>,
  mount
);
