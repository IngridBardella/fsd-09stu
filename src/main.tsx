import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import App2 from "./App2.tsx";

//Gets a reference to the div in in the index.html
const el = document.getElementById("root");

//Tell react to take control of that elemet.
const root = ReactDOM.createRoot(el!);

root.render(<App />);
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     {/* this is the starting point */}
//     <App />
//     {/* <App2></App2> */}
//   </React.StrictMode>
// );
