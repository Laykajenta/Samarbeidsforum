import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";

import "./styles/components/nav.css";
import "./styles/components/hero.css"
import "./styles/components/news.css"
import "./styles/components/events.css"
import "./styles/components/members.css"
import "./styles/components/contact.css"
import "./styles/components/footer.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);