import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App"
import './index.scss'

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById("root"));