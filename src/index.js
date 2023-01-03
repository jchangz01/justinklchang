import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

//Set up routes
ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
