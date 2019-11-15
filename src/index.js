import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'fomantic-ui-css/semantic.css';
import loadable from "@loadable/component";
import { PrerenderedComponent } from "react-prerendered-component";

const prerenderedLoadable = dynamicImport => {
  const LoadableComponent = loadable(dynamicImport);
  return React.memo(props => (
    // you can use the `.preload()` method from react-loadable or react-imported-component`
    <PrerenderedComponent live={LoadableComponent.load()}>
      <LoadableComponent {...props} />
    </PrerenderedComponent>
  ));
};

const App = prerenderedLoadable(() => import("./components/App"));
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(<App />, rootElement);
} else {
    ReactDOM.render(<App />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
