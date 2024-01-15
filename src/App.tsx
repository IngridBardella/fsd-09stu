import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList";

function App() {
  let message = "Hello world to FSD09 !!!";
  const number: number = 19;
  const values = [60, 61, 62];
  const isDay: boolean = true;
  // is the comment :
  // we cannot show the object in the jsx
  const Me = {
    id: 1,
    name: "reza",
    job: "teacher",
  };

  if (Math.random() > 0.5) {
    message = "you are lucky";
  }

  // be carefull. you can have only one Div for adjacent elements
  //in the JSX

  return (
    <>
      <div>
        <h1>{message}</h1>
        <h1>{number}</h1>
        <h1>{values}</h1>
        <h1>{isDay}</h1>
        {/* <h1>{Me}</h1> */}
        <h1>JSON.stringify(Me)</h1>
        <h1>{JSON.stringify(Me)}</h1>
        <h1>{new Date().toLocaleDateString()}</h1>
      </div>
      <div>
        <ContactList />
      </div>
    </>
  );
}

export default App;
