import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Login from "./Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     React.createElement("a", {href: "https://www.google.ru/"}, "Hello React")
// );

const content = (
    <div>
        <a href="Link">Hello World </a>
    </div>
)

// root.render(content);
root.render(<App />)
